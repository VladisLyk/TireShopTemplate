"use client"

import "@/styles/dropdown.css"
import { useState, useRef } from "react";

export default function SideDropdown({ children, head }) {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    const toggleDropdown = () => {
        setActive(!active);
    };

    const getContentHeight = () => {
        return contentRef.current.scrollHeight;
    };

    return (
        <div className={`dropdown ${active ? "active" : ""}`}>
            <div className="dropdown-wrapper">
                <div className="dropdown-head" onClick={(event) => {
                    event.preventDefault();
                    toggleDropdown();
                }}>
                    <div className="dropdown-title">
                        {head}
                    </div>
                    <i className={`bx ${active ? 'bxs-up-arrow' : 'bxs-down-arrow'}`}></i>
                </div>
                <div className="dropdown-content" ref={contentRef} style={{ maxHeight: active ? `${getContentHeight()}px` : 0, opacity: active ? 1 : 0 }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
