const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const API_PUBLIC_KEY="c2a0e16138109fe8c958a57e370ebaa1";
const API_PRIVATE_KEY="76f51f5b5c1945682418118a783474d023692c2b";


export const getCharacters = async () => {
    const url = `${BASE_URL}characters?ts=1&apikey=${API_PUBLIC_KEY}&hash=${API_PRIVATE_KEY}`;
}