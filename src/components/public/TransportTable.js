"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import {cars, motorcycles} from "@/app/discounts/data"
import { FormattedMessage } from "react-intl";

export default function TransportTable({CurrentTransportType}) {
    const [TableRows, setTableRows] = useState([<tr key={0}><td>Loading...</td><td></td><td></td></tr>]);

    useEffect(() => {
        
        if(CurrentTransportType == "car") {
            setTableRows([...Array(cars.length)].map((_, index) => {
                const element = cars[index];
                return (
                    <tr key={index}>
                        <td>{element.mark}</td>
                        <td>{element.summer}</td>
                        <td>{element.winter}</td>
                    </tr>
                );
            }));
        } else if(CurrentTransportType == "motorcycles") {
            setTableRows([...Array(motorcycles.length)].map((_, index) => {
                const element = motorcycles[index];
                return (
                    <tr key={index}>
                        <td>{element.mark}</td>
                        <td>{element.summer}</td>
                        <td>{element.winter}</td>
                    </tr>
                );
            }));
        } else {
            setTableRows([<tr key={0}><td>Could not found category...</td><td></td><td></td></tr>]);
        }

        return () => {}
    }, [CurrentTransportType]);
    
    return (
        <table className="vehicleValuesTable" style={{marginTop: "15px"}}>
            <thead>
                <tr>
                    <th><FormattedMessage id="table.type" defaultMessage={"Type"} /></th>
                    <th><Image src="/summer.svg" alt="summer" width={20} height={20} /> <FormattedMessage id="table.summer" defaultMessage={"Summer"} /></th>
                    <th><Image src="/winter.svg" alt="winter" width={20} height={20} /> <FormattedMessage id="table.winter" defaultMessage={"Winter"} /></th>
                </tr>
            </thead>
            <tbody>
                {TableRows}
            </tbody>
        </table>
    );
}
