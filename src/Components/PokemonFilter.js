import React, { useEffect, useState } from 'react'
import { getQuizItems } from '../getQuizItems'


export default function PokemonFilter() {

    const [listItems, setListItems] = useState( [] )
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState("")
    const fetchItems = async () =>{
        await getQuizItems(151)
        .then( (response) => {
            setListItems([...response.results])
            console.log(listItems)
        })
    }


    useEffect( () => {
        
        fetchItems()
        setIsLoading(false)
    }, [])


    return (
    <div>
        <input 
            placeholder='StartTyping' 
            onChange={  (e)=> {
                setQuery(e.target.value)
            }} 
            type = "search"
            value = {query}
        />
        <ul className='list-to-filter'>
            {listItems.filter( (el) => el.name.includes(query)).map( (el) => {return <li>{el.name}</li>} 
        )}
    </ul>
        
    </div>
  )
}
