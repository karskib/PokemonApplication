import axios from 'axios';  

const REACT_APP_API_URI = 'https://pokeapi.co/api/v2/'


export const getPokemon = ( id ) => {
    const url = `${REACT_APP_API_URI}pokemon/${id}`

    return axios.get(url)
    .then( (response)=> response.data)
    
}