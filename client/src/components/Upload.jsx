
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContex'

const Upload = () => {


  const {removeImagBG ,  image,
    setImage,} = useContext(AppContext)
  return (
    <div className='pb-60'>
    
        <h1 className='text-3xl font-semibold text-center mt-4 mb-12' >     See the magic. Try now</h1>


        <div className='text-center mb-24' >

<input onChange={e => removeImagBG(e.target.files[0])} accept='image/**' type='file' name=''  id='upload2' hidden/>
<label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-800 to-fuchsia-500 m-auto ' htmlFor='upload2'>
    <img className='w-5' src={assets.upload_btn_icon} />
    <p className='text-sm text-white'>
        Upload your Image

    </p>
</label>

</div>

    </div>
  )
}

export default Upload