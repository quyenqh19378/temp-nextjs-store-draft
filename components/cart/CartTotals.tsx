import type { Cart } from "@prisma/client";
import { Card, CardTitle } from "../ui/card";
import { formatCurrency } from "@/utils/format";
import { Separator } from "../ui/separator";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { createOrderAction } from "@/utils/actions";

function CartTotals({ cart }: { cart: Cart }) {
    const { cartTotal, tax, shipping, orderTotal } = cart;
    return (
        <div>
            <Card className='p-8'>
                <CartTotalRow label='Subtotal' amount={cartTotal} />
                <CartTotalRow label='Shipping' amount={shipping} />
                <CartTotalRow label='Tax' amount={tax} />
                <CardTitle>
                    <CartTotalRow
                        label='Order total'
                        amount={orderTotal}
                        lastRow
                    />
                </CardTitle>
            </Card>
            <FormContainer action={createOrderAction}>
                <SubmitButton text='Place Order' className='w-full mt-8' />
            </FormContainer>
        </div>
    );
}

const CartTotalRow = ({
    label,
    amount,
    lastRow,
}: {
    label: string;
    amount: number;
    lastRow?: boolean;
}) => {
    return (
        <div>
            <p className='flex justify-between text-sm'>
                <span>{label}</span>
                <span>{formatCurrency(amount)}</span>
            </p>
            {lastRow ? null : <Separator className='my-2' />}
        </div>
    );
};

export default CartTotals;
