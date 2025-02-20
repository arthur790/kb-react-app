import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(false);

    useEffect(() =>{
     
    }, [])


    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);
