"use client"
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import TransportTable from "@/components/public/TransportTable";
import DashboardLayout from "@/app/dashboard/layout";

export default function Page() {

    const [CurrentTransportType, setCurrentTransportType] = useState("car");

    return (
        <DashboardLayout>
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
                <TransportTable CurrentTransportType={CurrentTransportType} />
            </div>
        </DashboardLayout>
    );
}