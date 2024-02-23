"use client"

import "@/styles/default.css"
import "../../node_modules/boxicons/css/boxicons.css"

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { IntlProvider } from 'react-intl'; 
import { LanguageProvider } from "@/components/LanguageContext";
import messages_en from "@/translations/en.json";
import messages_lt from "@/translations/lt.json";

const messages = {
    'en': messages_en,
    'lt': messages_lt
};

const language = "en";
export default function RootLayout({ children }) {
  
  return (
    <html>
        <IntlProvider locale={"en"} messages={messages["en"]}>
          <body className={inter.className}>{children}</body>
        </IntlProvider>
    </html>
  );
}
