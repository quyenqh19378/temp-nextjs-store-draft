import { fetchProductReviews } from "@/utils/actions";
import SectionTitle from "../global/SectionTitle";
import ReviewCard from "./ReviewCard";

async function ProductReviews({ productId }: { productId: string }) {
    const reviews = await fetchProductReviews(productId);
    return (
        <div className='mt-16'>
            <SectionTitle text='Product reviews' />
            <div className='grid md:grid-cols-2 gap-8 my-8'>
                {reviews.map((review) => {
                    const { rating, comment, authorName, authorImageUrl } =
                        review;
                    const reviewInfo = {
                        rating,
                        comment,
                        name: authorName,
                        image: authorImageUrl,
                    };
                    return (
                        <ReviewCard key={review.id} reviewInfo={reviewInfo} />
                    );
                })}
            </div>
        </div>
    );
}
export default ProductReviews;
