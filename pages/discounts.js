"use client"

import "@/styles/page.css"
import NavBar from "@/components/public/NavBar";
import SidePanel from "@/components/public/SidePanel";
import WarningAlert from "@/components/WarningAlert";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import TransportTable from "@/components/public/TransportTable";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Discounts() {

    const [CurrentTransportType, setCurrentTransportType] = useState("car");

    return (
        <>
            <NavBar />
            <div className="page">
                <SidePanel />
                <div className="content">
                    <WarningAlert>
                        <FormattedMessage defaultMessage={"The table shows the basic discount prices, but when the product is discounted \"In the warehouse catalog, you will see a possible discount based on the general discount policy"} id="discounts.warning" />
                    </WarningAlert>
                    <div style={{marginTop: "10px"}}>
                        <label htmlFor="#typeVehicle">
                            <FormattedMessage defaultMessage={"Type of transport"} id="discounts.typeVehicle" />
                        </label>
                            <select id="typeVehicle" onChange={(event) => {
                                event.preventDefault();
                                setCurrentTransportType(event.target.value)
                            }}>
                                <option value={"car"}>
                                    <FormattedMessage defaultMessage={"CAR"} id="discounts.typeVehicle.select.cars" />
                                </option>
                                <option value={"motorcycles"}>
                                    <FormattedMessage defaultMessage={"motorcycles"} id="discounts.typeVehicle.select.motorcycles" />
                                </option>
                        </select>
                    </div>
                    <TransportTable CurrentTransportType={CurrentTransportType} />
                </div>
            </div>
            <LanguageSwitcher />
        </>
    );
}