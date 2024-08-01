"use client";

import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";

function NavSearch() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const [search, setSearch] = useState(
        searchParams.get("search")?.toString() || ""
    );

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }
        replace(`/products?${params.toString()}`);
    }, 2000);

    useEffect(() => {
        if (!searchParams.get("search")) {
            setSearch("");
        }
    }, [searchParams]);

    return (
        <Input
            type='search'
            placeholder='search products...'
            className='max-w-xs dark:bg-muted '
            value={search}
            onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
            }}
        />
    );
}
export default NavSearch;
