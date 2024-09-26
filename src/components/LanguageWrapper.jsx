import { createContext } from 'preact';
import { useState } from 'preact/hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import English from '../lang/en.json';

export const Context = createContext();

export default function LanguageWrapper(props) {
    const [locale, setLocale] = useState("en");
    const [messages, setMessages] = useState(English);

   return (
       <Context.Provider value = {{locale, setLocale, setMessages }}>
           <IntlProvider messages={messages} locale={locale}>
               {props.children}
           </IntlProvider>
       </Context.Provider>

   );
}