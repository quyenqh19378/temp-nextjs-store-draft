import ProductsContainer from "@/components/products/ProductsContainer";

function ProductsPage({
    searchParams,
}: {
    searchParams: { search?: string; layout?: string };
}) {
    const search = searchParams.search || "";
    const layout = searchParams.layout || "grid";
    return (
        <>
            <ProductsContainer search={search} layout={layout} />
        </>
    );
}
export default ProductsPage;
