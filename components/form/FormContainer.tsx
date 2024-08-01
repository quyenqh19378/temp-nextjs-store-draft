"use client";

import { useFormState } from "react-dom";
import type { actionFunction } from "@/utils/types";
import { useToast } from "../ui/use-toast";
import { useEffect } from "react";

const initialState = {
    message: "",
};

function FormContainer({
    action,
    children,
}: {
    action: actionFunction;
    children: React.ReactNode;
}) {
    const [state, formAction] = useFormState(action, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state.message) {
            toast({ description: state.message });
        }
    }, [state, toast]);

    return <form action={formAction}>{children}</form>;
}
export default FormContainer;

//1. action đó là chức năng chúng ta sẽ gọi khi biểu mẫu được gửi
//2. children vì chúng tôi muốn hiển thị đầu vào
