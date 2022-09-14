import React, { createContext, useCallback, useState } from "react";
import { annoucementsAPI } from "../api/annoucementsAPI";

export const AnnoucementsContext = createContext<any>({});

function AnnoucementsProvider(props: any) {
  const [annoucements, setAnnoucements] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAnnoucementsAPI = useCallback(() => {
    setLoading(true);
    annoucementsAPI
      .getAll()
      .then((res) => setAnnoucements(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AnnoucementsContext.Provider
      value={{
        loadAnnoucementsAPI,
        loading,
        annoucements,
      }}
    >
      {props.children}
    </AnnoucementsContext.Provider>
  );
}

export default AnnoucementsProvider;
