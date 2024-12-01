
import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44  pb-10'>
    

 <img src={assets.logo} alt='logo' className='w-15 h-15' />
 <p className=' flex-1 border-1 border-gray-400 pl-4 text-sm  text-gray-500 mt-4'>© 2025 All Rights Reserved</p>


  <div className='flex  items-center'>

  <img src={assets.facebook_icon} alt='facebook_icon' className='w-10' />
    <img src={assets.twitter_icon} alt='twitter_icon' className='w-10' />
    <img src={assets.google_plus_icon} alt='google_plus_icon' className='w-10' />

  </div>

    </div>
  );
}

export default Footer;
