'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    // console.log(pathname,"pathname");

    const isActive = href === pathname;
    
    return (
        <Link href={href} className={`${isActive?'border-b-2 rounded-b-none border-[#763d22] font-semibold':''}`}>{children}</Link>
    );
};

export default NavLink;