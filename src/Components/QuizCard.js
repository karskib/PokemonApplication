import React from 'react'

export default function QuizCard( { correctAns, possibleAnswers, checkAnswer, setDisable }) {
  return (
    <div className='card-wrapper'>
        <h3 className='card-title'>Guess the name of the pokemon</h3>
            <div className='images-section-card'>
                <img src= {correctAns.img_back} alt= ""></img>
                <img src= {correctAns.img_front} alt= ""></img>
            </div>
        <ul className='answers'>
            {possibleAnswers.map( (el) => {
                return <button className='answer-item'
                        onClick={checkAnswer}
                        disabled = {setDisable}
                        >
                    {el.name}
                        </button>
                })}
        </ul>
    </div>
  )
}
