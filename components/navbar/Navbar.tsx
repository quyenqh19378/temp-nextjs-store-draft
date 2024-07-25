import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import { Suspense } from "react";

function Navbar() {
    return (
        <nav className='border-b'>
            <Container className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8 '>
                <Logo />
                <Suspense>
                    <NavSearch />
                </Suspense>
                <div className='flex items-center gap-4'>
                    <CartButton />
                    <DarkMode />
                    <LinksDropdown />
                </div>
            </Container>
        </nav>
    );
}
export default Navbar;
