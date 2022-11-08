import React from 'react'

export default function QuizCard( { correctAns, possibleAnswers, checkAnswer }) {
  return (
    <div className='card-wrapper'>
            <div className='images-section-card'>
                <img src= {correctAns.img_back} alt= ""></img>
                <img src= {correctAns.img_front} alt= ""></img>
            </div>
        <ul className='answers'>
            {possibleAnswers.map( (el) => {
                return <button className='answer-item'
                        onClick={checkAnswer}
                        >
                    {el.name}
                        </button>
                })}
        </ul>
    </div>
  )
}
