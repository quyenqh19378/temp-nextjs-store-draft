"use client";

import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

function Sidebar() {
    const pathname = usePathname();
    return (
        <aside>
            {adminLinks.map((link) => {
                const isActivePage = pathname === link.href;
                const variant = isActivePage ? "default" : "ghost";
                return (
                    <Button
                        key={link.href}
                        variant={variant}
                        asChild
                        className='w-full mb-2 capitalize font-normal justify-start'
                    >
                        <Link href={link.href}>{link.label}</Link>
                    </Button>
                );
            })}
        </aside>
    );
}
export default Sidebar;
