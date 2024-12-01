
import React from 'react';
import { assets } from '../assets/assets';

import { Link } from 'react-router-dom';


import { SignOutButton, useClerk, UserButton, useUser } from '@clerk/clerk-react';
const Navbar = () => {

  const { openSignIn } = useClerk();

  const {user , isSignedIn}  = useUser();

  console.log(user);
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      
      <Link to="/" >
      <img src={assets.logo}  alt='logo' className='w-32 sm:w-44'/>
      </Link> 


 {
  isSignedIn ? (
    <>
    <UserButton />
    </>

  )   : (

    <button onClick={() => openSignIn()} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:py-3 text-sm rounded-full'>
    Get started  <img className='w-3' src={assets.arrow_icon} alt='aroow' />
  </button>
  )
 }

     





    </div>
  );
}

export default Navbar;
