import axios from 'axios';  

const REACT_APP_API_URI = 'https://pokeapi.co/api/v2/'


export const getQuizItems = ( limit ) => {
    const url = `${REACT_APP_API_URI}pokemon/?limit=${limit}`
    return axios.get(url)
    .then( (response)=> response.data)
    
}