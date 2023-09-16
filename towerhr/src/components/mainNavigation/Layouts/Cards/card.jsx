import React from 'react'
import './card.css'

const Card = ({title,employeeNo,increase}) => {
  return (
    <div className='card'>
        <h1 class="card-title">{title} </h1>
        <h2 className="number">{employeeNo} </h2>
        <small className="increase">{increase} </small> <small className='increaseText'>increase last year</small>

        <p className="view-details">View Details</p>
        
    </div>
  )
}

export default Card
