"use client"

import "@/styles/default.css"
import "@/styles/dashboard.css"
import "../../../node_modules/boxicons/css/boxicons.css"

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { IntlProvider } from 'react-intl'; 
import messages_en from "@/translations/en.json";
import messages_lt from "@/translations/lt.json";
import SidePanel from "@/components/dashboard/SidePanel";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormattedMessage } from "react-intl";


const messages = {
    'en': messages_en,
    'lt': messages_lt
};

const language = "lt";
export default function DashboardLayout({ children }) {

  const pathname = usePathname();

  return (
          <div className="page">
            <SidePanel />
            <div className="content">
              <div className="head">
                  <div className="breadcrumbs">
                      <p><FormattedMessage defaultMessage={"Home" } id="dashboard.home"/></p>
                      <i clasName='bx bx-chevron-right'></i>
                  </div>
                  <div className="profile">
                      <div className="information">
                          <div className="name">
                              <p><b>Davis MatrixSoftLabs</b></p>
                              <small><FormattedMessage defaultMessage={"Client" } id="dashboard.client"/></small>
                          </div>
                          <i class='bx bx-user-circle' ></i>
                      </div>
                      <i class='bx bx-log-in' ></i>
                  </div>
              </div>
              <div className="categories">
                <Link href={"/dashboard/"} className={pathname == "/dashboard" ? "active" : ""}>
                        <FormattedMessage id="navbar.contacts"
                                        defaultMessage="Contacts"
                        />
                </Link>
                <Link href={"/dashboard/discounts"} className={pathname == "/dashboard/discounts" ? "active" : ""} >
                        {/* Pamatatladies */}
                        <FormattedMessage id="navbar.discounts"
                            defaultMessage="Discounts"
                        />
                </Link>
              </div>
              <div className="content-page">
                <div className="page-info">
                  {children}
                </div>
                <div className="manager-info">
                  <div className="section">
                    <h4><FormattedMessage defaultMessage={"Find out information about orders:" } id="dashboard.aboutOrders"/></h4>
                    <div className="manager-contacts">
                        <div className="column">
                          <i className='bx bx-envelope' ></i>
                          <div className="column-value">
                            <p><FormattedMessage defaultMessage={"Email us:" } id="dashboard.usemail"/></p>
                            <p><b>shop@tireshop.lv</b></p>
                          </div>
                        </div>
                        <div className="column">
                          <i className='bx bxs-phone' ></i>
                          <div className="column-value">
                            <p><FormattedMessage defaultMessage={"Phone number" } id="managers.phoneNumber"/>:</p>
                            <p><b>+371 25737000</b></p>
                          </div>
                        </div>
                    </div>
                  </div>
                  <p>
                    <FormattedMessage id="dashboard.specificQuestion" defaultMessage={"If you have specific questions about clarifying the terms of cooperation, please contact us hired managers"}/>
                  </p>
                  <div className="section">
                    <div>
                      <h4><FormattedMessage defaultMessage={"Your manager" } id="dashboard.yourManager"/>:</h4>
                      <p><FormattedMessage defaultMessage={"Wholesale prices and discounts" } id="dashboard.yourManager.discount"/></p>
                    </div>
                    <div className="column">
                      <i className='bx bx-user' ></i>
                      <div className="column-value">
                        <p><FormattedMessage defaultMessage={"First name" } id="dashboard.firstName"/>:</p>
                        <p><b>Uldis Taurins</b></p>
                      </div>
                    </div>
                    <div className="column">
                      <i className='bx bx-envelope' ></i>
                      <div className="column-value">
                        <p><FormattedMessage defaultMessage={"Email us:" } id="dashboard.usemail"/>:</p>
                        <p><b>shop@tireshop.lv</b></p>
                      </div>
                    </div>
                    <div className="column">
                      <i className='bx bxs-phone' ></i>
                      <div className="column-value">
                        <p><FormattedMessage defaultMessage={"Phone number" } id="managers.phoneNumber"/>:</p>
                        <p><b>+371 25737000</b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
