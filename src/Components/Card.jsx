import React from 'react'

const Card = ({education}) => {
  return (
    <div className='bg-gray-400'>
        <div>
            <h1>{education.date}</h1>
            <p>{education.title}</p>
        </div>
        <p>{education.degree}</p>
        <p>{education.name}</p>
        <p>{education.institution}</p>
        <p>{education.location}</p>

    </div>
  )
}

export default Card