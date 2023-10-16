
export const BASE_URL = 'https://swapi.dev/api';
export const PEOPLE_URL = `${BASE_URL}/people`;



export const getIdFromUrl = (url: string) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length - 2];
    };