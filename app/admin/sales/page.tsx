import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { fetchAdminOrders } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";

async function SalesPage() {
    const orders = await fetchAdminOrders();
    return (
        <div>
            <Table>
                <TableCaption> Total orders : {orders.length}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Tax</TableHead>
                        <TableHead>Shipping</TableHead>
                        <TableHead>Order Total</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => {
                        const {
                            id,
                            products,
                            email,
                            orderTotal,
                            tax,
                            shipping,
                            createdAt,
                        } = order;
                        return (
                            <TableRow key={id}>
                                <TableCell>{email}</TableCell>
                                <TableCell>{products}</TableCell>
                                <TableCell>{formatCurrency(tax)}</TableCell>
                                <TableCell>
                                    {formatCurrency(shipping)}
                                </TableCell>
                                <TableCell>
                                    {formatCurrency(orderTotal)}
                                </TableCell>
                                <TableCell>{formatDate(createdAt)}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
export default SalesPage;
