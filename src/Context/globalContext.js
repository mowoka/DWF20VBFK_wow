import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userColumn, setUserColumn] = useState([
    {
      id: 1,
      name: "Giofanny Mowoka",
      email: "giomowoka@gmail.com",
      password: "mowoka123",
      role: "user",
    },
    {
      id: 2,
      name: "Mokaz",
      email: "mokaz@gmail.com",
      password: "mowoka123",
      role: "user",
    },
    {
      id: 3,
      name: "admin",
      email: "admin@gmail.com",
      password: "admin123",
      role: "admin",
    },
  ]);

  return (
    <AppContext.Provider value={[userColumn, setUserColumn]}>
      {children}
    </AppContext.Provider>
  );
};
