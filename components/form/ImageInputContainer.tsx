"use client";

import type { actionFunction } from "@/utils/types";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "@/components/form/FormContainer";
import ImageInput from "@/components/form/ImageInput";
import { SubmitButton } from "@/components/form/Buttons";

type ImageInputContainerProps = {
    name: string;
    image: string;
    action: actionFunction;
    text: string;
    children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
    const { name, image, action, text } = props;
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

    return (
        <div className='mb-8'>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className='rounded-md object-cover mb-4 w-[200px] h-[200px]'
            />

            <Button
                variant='outline'
                size='sm'
                className='capitalize'
                onClick={() => setIsUpdateFormVisible((prev) => !prev)}
            >
                {text}
            </Button>
            {isUpdateFormVisible && (
                <div className='max-w-md mt-4'>
                    <FormContainer action={action}>
                        {props.children}
                        <ImageInput />
                        <SubmitButton size='sm' />
                    </FormContainer>
                </div>
            )}
        </div>
    );
}
export default ImageInputContainer;
