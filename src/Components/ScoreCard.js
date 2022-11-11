import React from 'react'

export default function ScoreCard( {score, questionNumbers}) {
  return (
    <div className='score-card'>   
        <ul className='score'>
            <li className='score-item'>Your Final score is</li>
            <li className='score-item'> {score}</li>
            <li className='score-item'>Total Number of questions</li>
            <li className='score-item'>{questionNumbers}</li>
        </ul>
    </div>
  )
}
