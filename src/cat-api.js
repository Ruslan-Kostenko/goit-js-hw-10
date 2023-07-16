const BASE_URL = "https://api.thecatapi.com/v1/breeds/";
const API_KEY = "live_FRN6RSKpoifVqVcH15DByiKZ7fZNIjnhoXIWgoGpYrsOUlapETRIWTjwEp5hy4wl"; 

export function fetchBreeds(){
    return fetch(`${BASE_URL}?api_key=${API_KEY}`)
    .then((resp)=>{
        if(!resp.ok){
        throw new Error(resp.statusText);
    }
    return resp.json();});
    };

export function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;
    return fetch(url)
    .then((resp)=>{
        if(!resp.ok){
        throw new Error(resp.statusText);
    }
    return resp.json();});
    };