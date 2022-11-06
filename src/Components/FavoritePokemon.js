import React from 'react'

export default function FavoritePokemon( { favoritePokemons }) {
  return (
    <div className='favorite-pokemons-page'>
    <main>
      { favoritePokemons.map( favPoke => {
        return <div className='fav-pokemon' key={favPoke.name}>
            <h3> {favPoke.name}</h3>
             <img src = {favPoke.photoFront} alt = ""></img>
          </div>
      })}
    </main>
    
    </div>
  )
}
