
import React from 'react';
import { assets } from '../assets/assets';

const Step = () => {
  return (
    <div className='mx-4  lg:mx-44 py-20  xl:py-10'>
      

   
        <h1 className='text-3xl font-semibold text-center mt-4 ' >
        Steps to remove background image in seconds
        </h1>
     

     <div className='flex items-start flex-wrap gap-4  mt-16 xl:mt-24 justify-center '>





     <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 rounded hover:scale-105 transition-all'>

   <img src={assets.upload_icon}  className='w-10'/>

   <div>
    <p className='text-xl font-medium'>Upload Image</p>
    <p className='text-sm font-medium mt-1'>This is a demo text, will replace it later. This is a demo..</p>
   </div>

      

    </div>




    <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 rounded hover:scale-105 transition-all'>

<img src={assets.remove_bg_icon}  className='w-10'/>

<div>
 <p className='text-xl font-medium'>Remove background</p>
 <p className='text-sm font-medium mt-1'>This is a demo text, will replace it later. This is a demo..</p>
</div>

   

 </div>



 <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 rounded hover:scale-105 transition-all'>

<img src={assets.download_icon}  className='w-10'/>

<div>
 <p className='text-xl font-medium'>Download image</p>
 <p className='text-sm font-medium mt-1'>This is a demo text, will replace it later. This is a demo..</p>
</div>

   

 </div>



     </div>



    </div>
  );
}

export default Step;
