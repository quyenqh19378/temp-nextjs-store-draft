import { Suspense } from "react";

import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

function HomePage() {
    return (
        <>
            <Hero />
            <Suspense fallback={<LoadingContainer />}>
                <FeaturedProducts />
            </Suspense>
        </>
    );
}
export default HomePage;
