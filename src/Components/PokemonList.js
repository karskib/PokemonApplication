import React from 'react'
import Pokemon from './Pokemon';

export default function PokemonList( { 
    getPokemon,
    pokemonList,
    setPokemonList, 
    setFavPokemon,
    pokemonCount,
    setPokemonCount }) {

    
  return (
    
    <div className='main-wrapper'>
        <div className='counter'> Currently Selected : {pokemonCount} Pokemons</div>
        <h1>Pokemons</h1>
        <button className='pokemon-generator' onClick = { getPokemon }>Add</button>
        <div className='poke-container'>
           {pokemonList.map(elem => {
                return <div> 
                    <button onClick = {  () => {
                        setPokemonList(pokemonList.filter((el) => el.name !== elem.name));
                        setPokemonCount(prev => { return prev - 1; });
                    }}> Delete</button>
                    <button onClick = { ()=>{
                            setFavPokemon(
                        prevFavs =>{ 
                            
                            return [...prevFavs.filter(el => el.name !== elem.name), {
                                name: elem.name,
                                photoFront: elem.front_photo
                            }] }
                         )
                    } }> Like</button>
                    <Pokemon
                        key={elem.id}
                        backSide={elem.back_photo}
                        frontSide = {elem.front_photo}
                        name = {elem.name}
                        moves = {elem.moves}
                        stats = {elem.stats}
                    />
                </div>
           })}
         </div>
    </div>
  )
}
