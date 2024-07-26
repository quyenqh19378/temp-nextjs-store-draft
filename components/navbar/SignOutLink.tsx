"use client";

import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

function SignOutLink() {
    const { toast } = useToast();
    const handleLogout = () => {
        toast({ description: "Logging out..." });
    };
    return (
        <SignOutButton>
            <Link href='/' className='w-full text-left' onClick={handleLogout}>
                Logout
            </Link>
        </SignOutButton>
    );
}
export default SignOutLink;
