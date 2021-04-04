
import { useState } from 'react';

const useFetch = () => {
    
    const [data, setData] = useState({});
    const [error, setErro] = useState(null);

    const request = async (url) =>{
        //let response;
        //let json;

        let response = await fetch(url);
        let json = await response.json();

        console.log(json)
        setData(json)
        console.log(data) 
    }

    /*const request = async (url) => {
        let response;
        let json;

        try{

            response = await fetch(url);
            json = await response.json();

            if(!response.ok) throw new Error(json.status);

        }catch(err){
            json = null;
            setErro('deu erro') 
        }finally{
            setData(json.data.results)
            //console.log(json.data.results)
            console.log(data)
        }
        
    }*/

    return{
        data,
        request
    }
}

export default useFetch;