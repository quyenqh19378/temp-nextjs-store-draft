import Image from "next/image";
import { Card, CardHeader, CardContent } from "../ui/card";
import Rating from "./Rating";
import Comment from "./Comment";

type ReviewCardProps = {
    reviewInfo: {
        rating: number;
        comment: string;
        name: string;
        image: string;
    };
    children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
    const { rating, comment, name, image } = reviewInfo;
    return (
        <Card className='relative'>
            <CardHeader>
                <div className='flex items-center'>
                    <Image
                        src={image}
                        alt={name}
                        width={48}
                        height={48}
                        priority
                        className='w-12 h-12 object-cover rounded-full'
                    />
                    <div className='ml-4'>
                        <h3 className='text-sm font-bold capitalize mb-1'>
                            {name}
                        </h3>
                        <Rating rating={rating} />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Comment comment={comment} />
            </CardContent>
            <div className='absolute top-3 right-3'>{children}</div>
        </Card>
    );
}
export default ReviewCard;
