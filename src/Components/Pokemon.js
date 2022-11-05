  import React from 'react'
import PokemonStat from './PokemonStat'

export default function Pokemon( {frontSide,
        backSide, 
        stats, 
        moves, 
        name,
        }) 

        {
  return (
    <div className='wrapper'>
        <h3> {name}</h3>
        <div className='photos'>
            <img src= {frontSide} alt = ""></img>
            <img src = {backSide} alt = ""></img>
        </div>
        <select>
            {moves.map(move => {
                return <option>{move.move.name}</option>
            })}
        </select>
        <div className = 'stat-section' >
                {stats.map(stat => {
                  return <PokemonStat
                  key={Math.floor(Math.random() * 10000)}
                  statName={stat.stat.name}
                  statValue = {stat.base_stat} 
                   />
                })}
        </div>
    </div>
  )
}
