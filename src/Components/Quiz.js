import React, { useEffect, useState } from 'react'
import { getPokemon } from '../getPokemon'
import { getQuizItems } from '../getQuizItems'
import QuizCard from './QuizCard'


export default function Quiz() {
    
    const [question, setQuestion] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState({})
    const [possibleAnswers, setPossibleAnswers] = useState([])
    const limit = 20
    const questions = ["q1", "q2","q3"]

    const fetchPokeItems = async () =>{
        await getQuizItems(limit)
        .then( (response) => {
            setPossibleAnswers([...response.results, correctAnswer])
        })
    }

    const fetchCorrectAnswer = async () => {
        await getPokemon(Math.floor(Math.random() * 500))
                    .then( (answer) => { 
                        setCorrectAnswer( { name: answer.name,
                                    img_back: answer.sprites.back_default,
                                    img_front: answer.sprites.front_default,
                                            } )
                    })
                    
    }
    useEffect( () => {
        fetchCorrectAnswer()
        fetchPokeItems()
    }, [question])
    
  return (
    <div className='quiz-wrapper'>
       <button onClick = { () => {setQuestion( prev =>
             { return prev + 1})
             console.log(possibleAnswers)
             } 
    }> Next Question</button> 
        <div> 
            <QuizCard 
            correctAns = {correctAnswer}
            possibleAnswers = {possibleAnswers} 
            />
        </div>
    </div>
  )
}
