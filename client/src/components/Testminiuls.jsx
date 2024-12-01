
import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testminiuls = () => {
  return (
    <div className='pb-10 md:py-20 mx-2'>


      {/* Title */}

        <h1 className='text-3xl font-semibold text-center mt-4 mb-12' >Customer Testimonials</h1>


        {/* Testimonials */}


        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
           {
            testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className='bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3'>
                <p className='text-lg text-center mb-4'>{testimonial.text}</p>
                <div className='flex items-center justify-center gap-4'>
                  <img src={testimonial.image} alt={testimonial.author} className='w-16 h-16 rounded-full' />
                  <div>
                    <h2 className='text-xl font-semibold'>{testimonial.author}</h2>
                    <p className='text-gray
                    -500'>{testimonial.jobTitle}</p>
                    </div>
                </div>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default Testminiuls