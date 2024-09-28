import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [userEmployeeData, setUserEmployeeData] = useState({})
  return (
    <AppContext.Provider value={{
      userEmployeeData,
      setUserEmployeeData
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = useContext(AppContext)

export {
  useAppContext,
  AppContextProvider
}