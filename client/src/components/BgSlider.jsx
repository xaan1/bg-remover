import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {

    const [sliderPostition , setSliderPosition] = useState(50)



    const handleSlider = (e) => {
        setSliderPosition(e.target.value)
    }

  return (
    <div className='pb-10 md:py-20 mx-2'>

      <h1 className='text-3xl font-semibold text-center mt-4 mb-12' > Remove background with Hight <br /> Quality and Accuracy</h1>

      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
        {/* backround image */}

        <img src={assets.image_w_bg} alt="image with background" className=""
        style={{clipPath: `inset(0 ${ 100.2  - sliderPostition}% 0 0)`}}
        />

        <img src={assets.image_wo_bg} alt="image without background" className="absolute top-0 left-0 w-full h-full"
          style={{clipPath: `inset(0 0 0 ${ sliderPostition}% )`}}
        />
         <input type="range" min="0" max="100" value={sliderPostition} onChange={handleSlider} className="absolute top-1/2 left-1/2   transform -translate-x-1/2 translate-y-1/2 w-full z-10  slider" id="myRange" />
      </div>
     
    </div>
  )
}

export default BgSlider