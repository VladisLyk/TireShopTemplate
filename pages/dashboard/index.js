"use client"
import { FormattedMessage } from "react-intl";
import Map from "@/components/Map";
import InfoText from "@/components/InfoText";
import HLine from "@/components/HLine";
import DashboardLayout from "@/app/dashboard/layout";

export default function Page() {
    const apiKey = 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg';
    const center = { lat: 37.7749, lng: -122.4194 }; // Начальные координаты
    const zoom = 10;

    return (
        <DashboardLayout>
            <div style={{marginTop: "10px"}}>
                <InfoText title={<FormattedMessage id="content.workingHours" defaultMessage="Working Hours" />} value="P-Pk. 9:00-18:00" textAlign={"end"} />
                <HLine margin={10} />
                <InfoText
                    title={<FormattedMessage id="content.storeAddress" defaultMessage="Store / Warehouse Address" />}
                    value="Krustpils iela 6, Rīga, LV-1073"
                    textAlign={"end"}
                />
                <HLine margin={10} />
                <InfoText title={<FormattedMessage id="content.officePhoneNumber" defaultMessage="Office Phone Number" />} value="+371 26606262" textAlign={"end"} />
                <HLine margin={10} />
                <InfoText title={<FormattedMessage id="content.email" defaultMessage="Email" />} value="info@tireshop.lv" textAlign={"end"} />
                <br />
                <br />
                <b className="">
                    <FormattedMessage id="content.accountingContacts" defaultMessage="Accounting Contacts" />
                </b>
                <HLine margin={10} />
                <InfoText title={<FormattedMessage id="content.accountingPhoneNumber" defaultMessage="Phone Number" />} value="+371 26916199" textAlign={"end"} />
                <HLine margin={10} />
                <InfoText title={<FormattedMessage id="content.accountingEmail" defaultMessage="Email" />} value="kredit@tireshop.lv" textAlign={"end"} />
                <br />
                <Map apiKey={apiKey} center={center} zoom={zoom} />
            </div>
        </DashboardLayout>
    );
}