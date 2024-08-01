import { Input } from "../ui/input";
import { Label } from "../ui/label";

const name = "price";

type FormInputNumberPrice = {
    defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberPrice) {
    return (
        <div className='mb-2'>
            <Label htmlFor={name}>Price ($)</Label>
            <Input
                id={name}
                type='number'
                name={name}
                min={0}
                defaultValue={defaultValue || 100}
                required
            />
        </div>
    );
}
export default PriceInput;
