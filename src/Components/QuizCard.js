import React from 'react'

export default function QuizCard( { correctAns, possibleAnswers }) {
  return (
    <div className='card-wrapper'>
        <img src= {correctAns.img_back} alt= ""></img>
        <img src= {correctAns.img_front} alt= ""></img>
        <ul className='answers'>
            {possibleAnswers.map( (el) => {
                return <li>
                    {el.name}
                </li>
                })}
        </ul>
    </div>
  )
}
