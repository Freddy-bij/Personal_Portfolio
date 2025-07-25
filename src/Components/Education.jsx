import React from 'react'
import educations from "../../src/Educations.json"
import Card from './Card'

const Education = () => {

    return (

        <div>
            <div>
                <div className='flex justify-center'>
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-purple-600  font-semibold">Eduction</span>
                </div>
                </div>
              
                <div className='max-w-4xl mx-auto'>
                    <div className='grid  gap-2 '>

                        {educations.map(education => <Card education={education} />)}



                    </div>
                </div>
            </div>


        </div>
    )
}

export default Education