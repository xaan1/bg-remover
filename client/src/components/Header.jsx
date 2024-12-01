
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div  className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-10  '>




{/* left side */}
   <div className='mt-5'>


    <h1 className='text-4xl  xl:text-5xl font-semibold'>
    Remove the <br/> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-400 bg-clip-text text-transparent'>background </span> from images<br/> for free.
    </h1>

    <p className='my-6  text-[15px] text-gray-600'>
    Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry.<br/> Lorem Ipsum has been the industry's <br/> standard dummy text ever.
    </p>

   <div>

    <input type='file' name=''  id='upload1' hidden/>
    <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-800 to-fuchsia-500 m-auto ' htmlFor='upload1'>
        <img className='w-5' src={assets.upload_btn_icon} />
        <p className='text-sm text-white'>
            Upload your Image

        </p>
    </label>

   </div>


   </div>














   {/* right side side */}
   <div>

<img src={assets.header_img} className='w-full max-w-md'   />
   </div>
    
    


    </div>
  )
}

export default Header