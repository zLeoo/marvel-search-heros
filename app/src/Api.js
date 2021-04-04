export const CryptoJS = require("crypto-js");




export const API_URL = 'https://gateway.marvel.com/v1/public';
export const TIMESTAMP = '1';
export const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_API_KEY;
export const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_API_KEY;
export const HASH = CryptoJS.MD5(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY).toString();

export function GET_HEROS(value){
    return{
        url: `${API_URL}/characters?nameStartsWith=${value}&ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`
    }
}

//export const API_URL = 'https://gateway.marvel.com/';

