/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

import { IntlProvider } from "react-intl";

import French from "../locales/fr.json";
import Spanish from "../locales/es.json";
import English from "../locales/en.json";

export const contextLanguage = createContext();

const recoverLang = () => {
  // estamos trayendo el idioma del navegador para poder setearlo por defecto en nuestro INTL
  return navigator.language === "fr"
    ? French
    : navigator.language === "es"
    ? Spanish
    : English;
};

const ProviderLanguage = (props) => {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(recoverLang());

  const handleLanguage = (e) => {
    // estamos seteando el locale y los mensajes en funcion del idioma seleccionado en el selector
    setLocale(e.target.value);
    setMessages(
      e.target.value === "fr"
        ? French
        : e.target.value === "es"
        ? Spanish
        : English
    );
  };

  return (
    <contextLanguage.Provider value={{ locale, handleLanguage }}>
      {/* estamos pasando el locale y la funcion handleLanguage a traves de nuestro context para poder
     utilizarlo en cualquier componente que este dentro de nuestro ProviderLanguage */}
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </contextLanguage.Provider>
  );
};

export default ProviderLanguage;
