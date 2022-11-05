import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <h1 className ="title-page">
            Pokemon Generator
        </h1>
        <ul className = "nav-links">
            <Link to = "/favpokemons">Go to Favorite Pokemons</Link>
            <Link to = "/">Go to Main</Link>
        </ul>
    </nav>
  )
}
