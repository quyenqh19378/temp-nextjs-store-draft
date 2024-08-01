import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import EmptyList from "@/components/global/EmptyList";
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "@/components/ui/table";
import { deleteProductAction, fetchAdminProducts } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";

async function ItemsPage() {
    const items = await fetchAdminProducts();
    if (items.length === 0) return <EmptyList />;
    return (
        <section>
            <Table>
                <TableCaption className='capitalize'>
                    total product: {items.length}
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => {
                        const { id: productId, name, price, company } = item;
                        return (
                            <TableRow key={productId}>
                                <TableCell>
                                    <Link
                                        href={`/products/${productId}`}
                                        className='underline text-muted-foreground tracking-wide capitalize'
                                    >
                                        {name}
                                    </Link>
                                </TableCell>
                                <TableCell>{company}</TableCell>
                                <TableCell>{formatCurrency(price)}</TableCell>
                                <TableCell className='flex items-center gap-x-2'>
                                    <Link
                                        href={`/admin/products/${productId}/edit`}
                                    >
                                        <IconButton actionType='edit' />
                                    </Link>
                                    <DeleteProduct productId={productId} />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </section>
    );
}

function DeleteProduct({ productId }: { productId: string }) {
    const deleteProduct = deleteProductAction.bind(null, { productId });
    return (
        <FormContainer action={deleteProduct}>
            <IconButton actionType='delete' />
        </FormContainer>
    );
}

export default ItemsPage;
