import { createContext, useState } from "react";

//create context
export const UserContext = createContext();

export const UserStorage = ({children}) => {


    const [data, setData] = useState(null); //data from the api
    const [erro, setErro] = useState(null); 
    const [toggle, setToggle] = useState(false); 
    const [valueGlobal, setValueGlobal] = useState(''); //value from the search bar
    
    
    const request = async (url) =>{
        let response;
        let json;

        response = await fetch(url);
        json = await response.json();
        //console.log(json)
        setData(json)
    
        //console.log(json)
        //console.log(data) 
    }

    return(
        <UserContext.Provider value={{valueGlobal, setValueGlobal, toggle, setToggle,data, erro, request}}>
            {children}
        </UserContext.Provider>
    )
}