import axios from 'axios';  

export const getPokemon = ( id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return axios.get(url)
    .then( (response)=> response.data)
        

}