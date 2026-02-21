import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import Magyar from '../lang/hu.json';
import English from '../lang/en.json';

export const Context = React.createContext();

export default function LanguageWrapper(props) {
    const [locale, setLocale] = useState("en");
    const [messages, setMessages] = useState("English");
    
    useEffect(() => {
        const local = navigator.language;
        let lang;
        if (local.includes("en")) {
            lang = English;
            setLocale(local)
            setMessages(lang)
        } else {
            lang = Magyar;
            setLocale(local)
            setMessages(lang)
        }
    }, [])

   function selectLanguage(e) {
       const newLocale = e.target.value;
       setLocale(newLocale);
       if (newLocale.includes("en")) {
        setMessages(English);
       } else {
        setMessages(Magyar);
       }
   }

   return (
       <Context.Provider value = {{locale, setLocale, messages, setMessages, selectLanguage}}>
           <IntlProvider messages={messages} locale={locale}>
               {props.children}
           </IntlProvider>
       </Context.Provider>
   );
}