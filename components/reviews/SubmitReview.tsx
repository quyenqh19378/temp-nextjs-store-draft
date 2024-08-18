"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { createReviewAction } from "@/utils/actions";
import FormContainer from "../form/FormContainer";
import RatingInput from "./RatingInput";
import TextAreaInput from "../form/TextAreaInput";
import { SubmitButton } from "../form/Buttons";

function SubmitReview({ productId }: { productId: string }) {
    const [isReviewFromVisible, setIsReviewFromVisible] = useState(false);
    const { user } = useUser();
    return (
        <div>
            <Button
                size='lg'
                className='capitalize'
                onClick={() => setIsReviewFromVisible((prev) => !prev)}
            >
                leave review
            </Button>
            {isReviewFromVisible && (
                <Card className='p-8 mt-8'>
                    <FormContainer action={createReviewAction}>
                        <input
                            type='hidden'
                            name='productId'
                            value={productId}
                        />
                        <input
                            type='hidden'
                            name='authorName'
                            value={user?.firstName || "user"}
                        />
                        <input
                            type='hidden'
                            name='authorImageUrl'
                            value={user?.imageUrl || ""}
                        />
                        <RatingInput name='rating' />
                        <TextAreaInput
                            name='comment'
                            labelText='feedback'
                            defaultValue='Outstanding product!!!'
                        />
                        <SubmitButton className='mt-4' />
                    </FormContainer>
                </Card>
            )}
        </div>
    );
}
export default SubmitReview;
