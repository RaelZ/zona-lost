import React, { createContext, useCallback, useState } from "react";
import { usersAPI } from "../api/usersAPI";

export const UsersContext = createContext<any>({});

function UsersProvider(props: any) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = useCallback(() => {
    setLoading(true);
    usersAPI
      .getAll()
      .then((res) => setUsers(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <UsersContext.Provider
      value={{
        loadUsers,
        loading,
        users,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
