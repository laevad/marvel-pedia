// @ts-ignore
import md5 from "md5";

const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const API_PUBLIC_KEY="c2a0e16138109fe8c958a57e370ebaa1";
const API_PRIVATE_KEY="76f51f5b5c1945682418118a783474d023692c2b";


const getTimestamp = () => Date.now().toString();
const getHash = (ts: string) => md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY);

const timestamp = getTimestamp();
const hash = getHash(timestamp);
const queryParams = `?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

export const getCharacters = async () => {
    const response = await fetch(`${BASE_URL}characters${queryParams}`);
    return await response.json();
}