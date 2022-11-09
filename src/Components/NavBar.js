import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <div className ="title-page"></div>
    <nav>

        <ul className = "nav-links">
            <Link to = "/favpokemons">Go to Favorite Pokemons</Link>
            <Link to = "/">Go to Main</Link>
            <Link to = "/pokequiz">Quiz</Link>
        </ul>
    </nav>
    </>
  )
}
