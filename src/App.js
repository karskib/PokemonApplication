import './App.css';
import PokemonList from './Components/PokemonList';
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import FavoritePokemon from "./Components/FavoritePokemon"
import { getPokemon } from './getPokemon';
import Quiz from './Components/Quiz';
import PokemonFilter from './Components/PokemonFilter';


function App() {

  const [favPokemon, setFavPokemon] = useState([])
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonCount, setPokemonCount] = useState(0)


    const fetchPokemons =  async () => {
      const id = Math.floor(Math.random() * 500)
       await getPokemon(id).then(
         (data) => { console.log(data)
        setPokemonList(prev=> {
          return  [...prev, {
            back_photo: data.sprites.back_default,
            front_photo: data.sprites.front_default,
            stats:data.stats,
            moves:data.moves,
            name: data.name
               }]
            }
          )}
        )
        setPokemonCount(prev => {return prev + 1})
    }
    
       useEffect(() => {
        fetchPokemons()
       }, [])

  return (
    <div>
      <NavBar />
      <Routes>
      <Route path = "/" element = {
          <PokemonList 
            getPokemon={fetchPokemons}
            setFavPokemon={setFavPokemon} 
            favPokemon = {favPokemon}
            pokemonList = {pokemonList}
            setPokemonList = {setPokemonList}
            setPokemonCount = {setPokemonCount}
            pokemonCount = {pokemonCount}
            />
        } />
      <Route path = "/favpokemons" 
            element = { 
            <FavoritePokemon 
              favoritePokemons={favPokemon}
            />}/>
        <Route path = "/pokequiz" element = {<Quiz />} />
        <Route path = "/pokemonFilter" element = {<PokemonFilter />} />
      </Routes>
    </div> 
  );
} 

export default App;
