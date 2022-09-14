import React, { createContext, useCallback, useState } from "react";
import { languageAPI } from "../api/languageAPI";

export const LanguageContext = createContext<any>({});

function LanguageProvider(props: any) {
  const [language, setLanguage] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadLanguage = useCallback(() => {
    setLoading(true);
    languageAPI
      .getAll()
      .then((res) => setLanguage(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        loadLanguage,
        loading,
        language,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
