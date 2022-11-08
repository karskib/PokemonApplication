import React, { useEffect, useState } from 'react'
import { getPokemon } from '../getPokemon'
import { getQuizItems } from '../getQuizItems'
import QuizCard from './QuizCard'


export default function Quiz() {
    
    const [question, setQuestion] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState({})
    const [possibleAnswers, setPossibleAnswers] = useState([])
    const [quizStart, setQuizStart] = useState()
    const [score, setScore] = useState(0)
    const [isNextQuestionLoading, setisNextQuestionLoading] = useState(false)
    const limit = 4
    
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
    
    const restartQuiz = () =>{
        setScore(0)
        setQuestion(0)
        setQuizStart(false)
    }

    const shuffleAnswers = ( arr) => {
        const shuffledAnswers =  [...arr].sort( ()=> {
                return 0.5 - Math.random()    
        })
        return shuffledAnswers
    }

    const verifyAnswer = (event) =>{
        const answer =  event.target.innerText
        if (question > 4) return
        if (answer === correctAnswer.name){
            setScore(prev => {return prev + 1})
        }
        setQuestion( prev => {return prev + 1})
        fetchQuestions()
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
            restartQuiz()
        }}>Restart</button>
            <div>Question goes here{question}</div>
            <div>Score goes here{score}</div>
    <div className='quiz-wrapper'>

        <div> 
            <QuizCard 
            correctAns = {correctAnswer}
            possibleAnswers = {shuffleAnswers([...possibleAnswers,correctAnswer])}
            checkAnswer = { verifyAnswer }
            />
        </div>
    </div>
    </>
  )
}
