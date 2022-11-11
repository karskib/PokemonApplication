import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getPokemon } from '../getPokemon'
import { getQuizItems } from '../getQuizItems'


export default function PokemonFilter() {

    const [listItems, setListItems] = useState( [] )
    const [isLoading, setIsLoading] = useState(true)
    const [activeElement, setActiveElement] = useState( {
                    name: "",
                    addressUrl: ""
                    })

    const [query, setQuery] = useState("")
    const [photo, setPhoto] = useState("")


    const fetchItems = async () =>{
        await getQuizItems(151)
        .then( (response) => {
            setListItems( [...response.results] )
            console.log( listItems )
        })
    }


    useEffect( () => {
        fetchItems()
        setIsLoading(false)
    }, [])

    const fetchPhoto = async (url) =>{
        await axios.get(url)
              .then( (res) => {
                setPhoto(res.data.sprites.front_default)
              })
    }

    return (
    <div className='filter-container'>
        <input 
            placeholder='StartTyping' 
            onChange={  (e)=> {
                setQuery(e.target.value)
            }} 
            type = "search"
            value = { query }
        />
        <ul className='list-to-filter'>
            {listItems.filter( 
                (el) => el.name.toLowerCase()
                .includes( query.toLowerCase() ))
                .map( (el) => {
                    return <li 
                        onMouseEnter={(e)=>{
                        setPhoto("")
                        setActiveElement({
                                name:e.target.innerText.split(" ")[0].toLowerCase(),
                                addressUrl: el.url
                                })
                            }}
                        key = {el.name}
                       
                        >
                        <div className = {activeElement.name === el.name ? "active-list-item" : "not-active-list-item"}>
                            <div className = "optional-photo" 
                                onClick={(e)=> {
                                        fetchPhoto(activeElement.addressUrl)               
                                }}>Show Image</div>

                            <img src= {photo} alt = ""></img>
                        </div>
                        { el.name }</li>} 
                )
            }
    </ul>
        
    </div>
  )
}
