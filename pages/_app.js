import { LanguageProvider } from "@/components/LanguageContext";
import "@/styles/default.css";
import "../node_modules/boxicons/css/boxicons.css";
import { Inter } from "next/font/google";
import { IntlProvider } from 'react-intl'; 
import messages_en from "@/translations/en.json";
import messages_lt from "@/translations/lt.json";
import { useLanguage } from "@/components/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

const messages = {
  'en': messages_en,
  'lt': messages_lt
};

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <InnerMyApp Component={Component} pageProps={pageProps} />
    </LanguageProvider>
  );
}

function InnerMyApp({ Component, pageProps }) {
  const language = useLanguage();

  return (
    <IntlProvider locale={language.getCurrentLanguage()} messages={messages[language.getCurrentLanguage()]}>
      <style jsx global>{`
        /* Ваши стили для шрифта Inter */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Inter'), local('Inter-Regular'), url(${inter.href}) format('woff2');
        }

        body {
          font-family: 'Inter', sans-serif;
          /* Другие стили для body */
        }
      `}</style>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
