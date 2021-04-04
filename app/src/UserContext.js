import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserStorage = ({children}) => {

    const [data, setData] = useState(null);
    const [erro, setErro] = useState(null);

    const request = async (url) =>{
        let response;
        let json;

        response = await fetch(url);
        json = await response.json();
        setData(json)

        //console.log(json)
        //console.log(data) 
    }

    return(
        <UserContext.Provider value={{data, erro, request}}>
            {children}
        </UserContext.Provider>
    )
}