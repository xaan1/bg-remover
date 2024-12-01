
import React from 'react';
import { assets } from '../assets/assets';

const Result = () => {
  return (
    <div className='mx-4 py-3 lg:mx-44 mt-14 min-h-[75vh] '>
      

      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>



<div className='flex flex-col sm:grid grid-cols-2 gap-8'>





  <div>
    <p className="text-3xl font-bold text-center mb-1">Original</p>

    <img src={assets.image_w_bg} alt="image" className="w-full h-96 object-cover" />

  </div>






  <div className='flex flex-col'>
    <p className="text-3xl font-bold text-center  mb-1">Background Remover</p>
   <div className='rounded-md border border-gray-300'>
   <img src={assets.image_wo_bg} alt="image" className="w-full h-96 object-cover " />


{/* loader */}


{/* <div>
  <div className="flex justify-center items-center mt-4">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
  <p className="text-center text-gray-500">Processing...</p>
</div> */}






   </div>
   
  </div>


  </div>
      



      {/* buttons */}


      <div className="flex justify-center items-center  sm:justify-end mt-4 flex-wrap gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Try Another Image
        </button>

        <a href='' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4">
          Download Image
        </a>

</div>

      </div>


    </div>
  );
}

export default Result;