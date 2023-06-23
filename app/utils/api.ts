// @ts-ignore
import md5 from "md5";
import {CharacterDataWrapper} from "@/app/type/marvels";
import {Response} from "next/dist/compiled/@edge-runtime/primitives";

const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const API_PUBLIC_KEY="c2a0e16138109fe8c958a57e370ebaa1";
const API_PRIVATE_KEY="76f51f5b5c1945682418118a783474d023692c2b";


const getTimestamp = () => Date.now().toString();
const getHash = (ts: string) => md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY);

const timestamp = getTimestamp();
const hash = getHash(timestamp);
const queryParams = `?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

// handle response
const handleResponse = async <T>(response: Response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const data = await response.json();
    return data.data as T;
}

// get all characters
export const getAllCharacters = async (): Promise<CharacterDataWrapper> => {
    const response = await fetch(`${BASE_URL}characters${queryParams}`);
   return handleResponse<CharacterDataWrapper>(response);
}

// get character by id
export const getCharacterById = async (id: number): Promise<CharacterDataWrapper> => {
    const response = await fetch(`${BASE_URL}characters/${id}${queryParams}`);
    return handleResponse<CharacterDataWrapper>(response);
}