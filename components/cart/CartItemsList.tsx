"use client";

import type { CartItemWithProduct } from "@/utils/types";
import { Card } from "@/components/ui/card";
import { FirstColumn, FourthColumn, SecondColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
    return (
        <div>
            {cartItems.map((cartItem) => {
                const { id, amount } = cartItem;
                const {
                    name,
                    company,
                    image,
                    price,
                    id: productId,
                } = cartItem.product;
                return (
                    <Card
                        key={id}
                        className='flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4'
                    >
                        <FirstColumn name={name} image={image} />
                        <SecondColumn
                            name={name}
                            company={company}
                            productId={productId}
                        />
                        <ThirdColumn id={id} quantity={amount} />
                        <FourthColumn price={price} />
                    </Card>
                );
            })}
        </div>
    );
}
export default CartItemsList;
