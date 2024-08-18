import type { NextRequest } from "next/server";
import Stripe from "stripe";
import db from "@/utils/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const POST = async (req: NextRequest) => {
    const requestHeaders = new Headers(req.headers);
    const origin = requestHeaders.get("origin");

    const { cartId, orderId } = await req.json();

    const order = await db.order.findUnique({
        where: {
            id: orderId,
        },
    });

    const cart = await db.cart.findUnique({
        where: {
            id: cartId,
        },
        include: {
            cartItems: {
                include: {
                    product: true,
                },
            },
        },
    });

    if (!order || !cart) {
        return Response.json(null, {
            status: 400,
            statusText: "Not Found",
        });
    }

    const line_items = cart.cartItems.map((cartItem) => {
        return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: cartItem.product.name,
                    images: [cartItem.product.image],
                },
                unit_amount: cartItem.product.price * 100, // price in cents
            },
            quantity: cartItem.amount,
        };
    });

    try {
        const session = await stripe.checkout.sessions.create({
            ui_mode: "embedded",
            metadata: { orderId, cartId },
            line_items: line_items,
            mode: "payment",
            return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
        });

        return Response.json({ clientSecret: session.client_secret });
    } catch (error) {
        console.log(error);

        return Response.json(null, {
            status: 500,
            statusText: "Internal Server Error ",
        });
    }
};
