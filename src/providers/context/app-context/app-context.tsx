import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../../../interfaces/users";
import { getCurrentUser } from "./api";

interface APP_CONTEXT {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;

  currentUserLoading: boolean;
  setCurrentUserLoading: Dispatch<SetStateAction<boolean>>;

  setRefetchCurrentUser: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<APP_CONTEXT>({} as APP_CONTEXT);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentUserLoading, setCurrentUserLoading] = useState<boolean>(true);
  const [refetchCurrentUser, setRefetchCurrentUser] = useState<boolean>(false);

  useEffect(() => {
    setCurrentUserLoading(true);

    getCurrentUser()
      .then(({ data }) => {
        setCurrentUser(data);
      })
      .finally(() => {
        setCurrentUserLoading(false);
      });
  }, [refetchCurrentUser]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,

        currentUserLoading,
        setCurrentUserLoading,

        setRefetchCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { useAppContext, AppContextProvider };
