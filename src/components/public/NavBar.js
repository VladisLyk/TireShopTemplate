"use client"

import "@/styles/navbar.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

export default function NavBar() {

    const [MobileMenu, setMobileMenu] = useState(false);
    const pathname = usePathname();
    
    return (
        <>
            <navbar>
                <h3>TireShop, SIA</h3>
                <div className="links">
                    <Link href={"/"} className={pathname == "/" ? "active" : ""}>
                        <FormattedMessage id="navbar.contacts"
                                        defaultMessage="Contacts"
                        />
                    </Link>
                    <Link href={"/discounts"} className={pathname == "/discounts" ? "active" : ""} >
                        {/* Pamatatladies */}
                        <FormattedMessage id="navbar.discounts"
                            defaultMessage="Discounts"
                        />
                    </Link>
                    <Link href={"/shipping"} className={pathname == "/shipping" ? "active" : ""} >
                        {/* Piegedes cena */}
                        <FormattedMessage id="navbar.shipping"
                            defaultMessage="Shipping cost"
                        />
                    </Link>
                    <Link href={"/api"} className={pathname == "/api" ? "active" : ""}>
                        {/* API */}
                        <FormattedMessage id="navbar.api"
                            defaultMessage="API"
                        />
                    </Link>
                    <a className={`menu-btn ${MobileMenu ? "active" : ""}`}
                    onClick={(event) => {
                        event.preventDefault();
                        setMobileMenu(!MobileMenu)
                    }}><i className='bx bx-menu'></i> Menu</a>
                </div>
            </navbar>
            <div className={`mobile-links ${MobileMenu ? "active" : ""}`}>
                    <Link href={"/"} className={pathname == "/" ? "active" : ""}>
                        <FormattedMessage id="navbar.contacts"
                                        defaultMessage="Contacts"
                        />
                    </Link>
                    <Link href={"/discounts"} className={pathname == "/discounts" ? "active" : ""} >
                        {/* Pamatatladies */}
                        <FormattedMessage id="navbar.discounts"
                            defaultMessage="Discounts"
                        />
                    </Link>
                    <Link href={"/shipping"} className={pathname == "/shipping" ? "active" : ""} >
                        {/* Piegedes cena */}
                        <FormattedMessage id="navbar.shipping"
                            defaultMessage="Shipping cost"
                        />
                    </Link>
                    <Link href={"/api"} className={pathname == "/api" ? "active" : ""}>
                        {/* API */}
                        <FormattedMessage id="navbar.api"
                            defaultMessage="API"
                        />
                    </Link>
            </div>
        </>
    );
}
