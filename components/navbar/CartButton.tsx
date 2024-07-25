import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";

import { Button } from "../ui/button";

async function CartButton() {
    // temp
    const numItemsInCart = 16;
    return (
        <Button
            asChild
            size='icon'
            variant='outline'
            className='relative flex items-center justify-center '
        >
            <Link href='/cart'>
                <LuShoppingCart />
                <span className='flex items-center justify-center text-xs w-6 h-6 rounded-full bg-primary text-white absolute -top-3 -right-3'>
                    {numItemsInCart}
                </span>
            </Link>
        </Button>
    );
}
export default CartButton;
