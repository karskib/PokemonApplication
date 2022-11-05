import React from 'react'

export default function PokemonStat( { statName, statValue}) {
  return (
    <>
    <div className='stats-component'>
        <div className='stat-name'> {statName}</div>
        <div className='stat-value'> {statValue}</div>
    </div>
    </>
  )
}
