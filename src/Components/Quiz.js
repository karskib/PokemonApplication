import React, { useEffect, useState } from 'react'
import { getPokemon } from '../getPokemon'
import { getQuizItems } from '../getQuizItems'
import QuizCard from './QuizCard'


export default function Quiz() {
    
    const [question, setQuestion] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState({})
    const [possibleAnswers, setPossibleAnswers] = useState([])
    const [quizStart, setQuizStart] = useState()


    const limit = 20
    
    const questionLimit = 5

    const fetchPokeItems = async () =>{
        await getQuizItems(limit)
        .then( (response) => {
            setPossibleAnswers([...response.results])
        })
    }

    const fetchCorrectAnswer = async () => {
        await getPokemon(Math.floor(Math.random() * 500))
                    .then( (answer) => { 
                        setCorrectAnswer( { name: answer.name,
                                img_back: answer.sprites.back_default,
                                img_front: answer.sprites.front_default,
                                } 
                            )
                    })
                    
    }
    const fetchQuestions = ( () => {
         fetchCorrectAnswer()
        fetchPokeItems()
    })
    
    useEffect(() => {
        fetchQuestions()
    }, [quizStart])
    

    const shuffleAnswers = ( arr) => {
        const shuffledAnswers =  [...arr].sort( ()=> {
                return 0.5 - Math.random()    
        })
        return shuffledAnswers
    }

    return (<>
        <button onClick = { () => {
            fetchQuestions()
            setQuizStart(true)
                }
            }
            disabled = {quizStart === true ? true : false}
            >Start Quiz</button>
        <button onClick = { () => {setQuestion( prev =>
              { return prev + 1})
              fetchQuestions()
                } 
              }
              disabled = {question === questionLimit ? true : false} 
     > Next Question</button> 
     <button onClick = { () =>{ 
            setQuizStart(false)
            setQuestion(0) 
        }}>Restart</button>
    <div className='quiz-wrapper'>
        <div> 
            <QuizCard 
            correctAns = {correctAnswer}
            possibleAnswers = {shuffleAnswers( [...possibleAnswers.slice(0,4), correctAnswer] )} 
            />
        </div>
    </div>
    </>
  )
}
