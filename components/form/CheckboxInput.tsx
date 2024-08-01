"use client";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";

type CheckboxInputProps = {
    name: string;
    label: string;
    defaultChecked?: boolean;
};

function CheckboxInput({ name, label, defaultChecked }: CheckboxInputProps) {
    return (
        <div className='flex items-center space-x-2'>
            <Checkbox name={name} id={name} defaultChecked={defaultChecked} />
            <Label
                htmlFor={name}
                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize'
            >
                {label}
            </Label>
        </div>
    );
}
export default CheckboxInput;
