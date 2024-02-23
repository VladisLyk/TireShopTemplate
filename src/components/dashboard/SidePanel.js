"use client"

import SideDropdown from "./SideDropdown";
import SideLink from "./SideLink";
import SideDropdownLink from "./SideDropdownLink";
import HLine from "../HLine";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../LanguageContext";

import { FormattedMessage } from "react-intl";

export default function SidePanel() {
    const [SidePanelActive, setSidePanelActive] = useState(false);
    const contentRef = useRef(null);
    const [isMobileDevice, setisMobileDevice] = useState(false);
    const [ContentHeight, setContentHeight] = useState(0);
    const language = useLanguage();

    useEffect(() => {
        setContentHeight(contentRef.current.scrollHeight);

        const checkIsMobile = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            setisMobileDevice(isMobile);
        };

        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <div className={`sidepanel ${SidePanelActive ? "active" : ""}`}>
            <div className="sidepanel-wrapper">
                <div className="sidepanel-section">
                    <div className="sidepanel-head">
                        <img className={"logo"} src="/logo.svg" alt="logo" />
                        <button className={`menu-btn ${SidePanelActive ? "active" : ""}`} onClick={(event) => {
                            event.preventDefault();
                            setSidePanelActive(!SidePanelActive);
                        }} >Menu</button>
                    </div>
                    <div className="links" ref={contentRef} style={{ maxHeight: SidePanelActive || !isMobileDevice ? `${ContentHeight}px` : 0, opacity: SidePanelActive || !isMobileDevice ? 1 : 0 }}>
                        <SideDropdown head={
                            <>
                                <i className='bx bx-search-alt-2'></i>
                                <p><FormattedMessage id="dashboard.sidepanel.browse" defaultMessage={"Browse"}/></p>
                            </>
                        }>
                            <SideDropdownLink title={<FormattedMessage id="dashboard.sidepanel.tires" defaultMessage={"Tires"}/>} icon={"bxs-circle"} onClick={() => {alert("Hello, world!")}} />
                            <HLine opacity={0.3} margin={"0px"}/>
                            <SideDropdownLink title={<FormattedMessage id="dashboard.sidepanel.discs" defaultMessage={"Discks"}/>} icon={"bxs-disc"} />
                            <HLine opacity={0.3} margin={"0px"}/>
                            <SideDropdownLink title={<FormattedMessage id="dashboard.sidepanel.battery" defaultMessage={"Batteries"}/>} icon={"bxs-car-battery"} />
                        </SideDropdown>
                        <SideLink title={<FormattedMessage id="dashboard.sidepanel.orders" defaultMessage={"My orders"}/>} icon={"bxs-calculator"} />
                        <SideLink title={<FormattedMessage id="dashboard.sidepanel.add" defaultMessage={"Add"}/>} icon={"bxs-file-doc"} />
                        <SideLink title={<FormattedMessage id="dashboard.sidepanel.discs" defaultMessage={"Discs"}/>} icon={"bxs-pie-chart"} />
                        <SideLink title={<FormattedMessage id="dashboard.sidepanel.cart" defaultMessage={"Cart"}/>} icon={"bx-cart"} />
                        <SideLink title={<FormattedMessage id="dashboard.sidepanel.information" defaultMessage={"Information"}/>} icon={"bx-info-circle"} />
                    </div>
                </div>
                <SideDropdown head={
                        <>
                            <i className='bx bxs-planet' ></i>
                            <p><FormattedMessage id="dashboard.sidepanel.language" defaultMessage={"Language"}/></p>
                        </>
                }>
                    <div className="dropdown-link" onClick={(event) => {
                        event.preventDefault();
                        language.setLanguage("en")
                    }}>
                        <i className='bx bxs-circle'></i>
                        <p>English</p>
                    </div>
                    <div className="dropdown-link" onClick={(event) => {
                        event.preventDefault();
                        language.setLanguage("lt")
                    }}>
                        <i className='bx bxs-circle'></i>
                        <p>Latish</p>
                    </div>
                </SideDropdown>
            </div>
        </div>
    );
}