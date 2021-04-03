
import { useState } from 'react';
const useFetch = () => {
    const [data, setData] = useState(null);

    const request = async (url) => {
        let response;
        let json;

        response = await fetch(url);
        json = await response.json();
        console.log(json)
    }

    return{
        data,
        request
    }
}

export default useFetch;