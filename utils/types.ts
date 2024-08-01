export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{ message: string }>;

export type CartItem = {
    productId: string;
    image: string;
    title: string;
    price: string;
    amount: number;
    company: string;
};

export type CartState = {
    cartItems: CartItem[];
    numberItemsInCart: number;
    cartTotal: number;
    shipping: number;
    tax: string;
    orderTotal: number;
};
