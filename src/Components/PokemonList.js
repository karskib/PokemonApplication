import React, { useState } from 'react'
import Pokemon from './Pokemon';


export default function PokemonList( { 
    getPokemon,
    pokemonList,
    setPokemonList, 
    setFavPokemon,
    favPokemon,
    pokemonCount,
    setPokemonCount }) {

    const [activeIndex, setActiveIndex] = useState({index: 0,
                                                    status:false})


  return (
    
    <div className='main-wrapper'>
        <div className='counter'> Currently Selected : {pokemonCount} Pokemons</div>
        <h1>Pokemons</h1>
        <button className='pokemon-generator' onClick = { getPokemon }>Add</button>
        <div className='poke-container'>
           {pokemonList.map( (elem, i) => {
                return <div className= { activeIndex.index === i && activeIndex.status ? "pokemon-active": null }
                        key = {i}
                        > 
                    <button onClick = {  () => {
                        setPokemonList(pokemonList.filter((el) => el.name !== elem.name));
                        setPokemonCount(prev => { return prev - 1; });
                    }}> Delete</button>
                    <button onClick = { ()=>{
                        console.log(activeIndex)
                            setActiveIndex( {index:i,
                                            status: true})
                            setFavPokemon(
                        prevFavs =>{ 
                            return [...prevFavs.filter(el => el.name !== elem.name), {
                                    name: elem.name,
                                    photoFront: elem.front_photo
                                }] 
                            }
                         )
                    } }> Like</button>
                        <button onClick = { () => {
                            setActiveIndex( {index: i,
                                status: false})
                            setFavPokemon(
                                favPokemon.filter( (el) => el.name !==elem.name)
                            )

                        }}>Dislike</button>
                        <Pokemon
                            key={elem.name}
                            backSide={elem.back_photo}
                            frontSide = {elem.front_photo}
                            name = {elem.name}
                            moves = {elem.moves}
                            stats = {elem.stats}
                        />
                        </div>
                })
            }
         </div>
    </div>
  )
}
