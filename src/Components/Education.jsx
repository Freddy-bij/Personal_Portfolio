import React from 'react'
import educations from "../../src/Educations.json"
import Card from './Card'

const Education = () => {
    return (
        <div>
            <h1 className="text-[#ff3f34] sm:text-start text-center text-2xl font-[sofia] font-bold uppercase py-4">
                Education
            </h1>
            <div className='max-w-4xl mx-auto'>
                <div className='grid xl:grid-cols-2 gap-2 '>

                    {educations.map(education => <Card education={education} />)}



                </div>
            </div>

        </div>
    )
}

export default Education