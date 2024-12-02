
import React, { useContext, useEffect } from 'react';
import { assets } from '../assets/assets';

import { Link } from 'react-router-dom';


import { SignOutButton, useAuth, useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContex';
const Navbar = () => {

  const { openSignIn } = useClerk();

  const {user , isSignedIn , }  = useUser();

  const { 
    credit,
    loadCreditBalance,
    setCredit,
    vite_bake_url
   } =  useContext(AppContext)


  useEffect(() => {
    loadCreditBalance()
},[isSignedIn])




  console.log(user);
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      
      <Link to="/" >
      <img src={assets.logo}  alt='logo' className='w-32 sm:w-44'/>
      </Link> 


 {
  isSignedIn ? (
    <div className='flex items-center gap-2 lg:gap-3'>
      <button

      className='flex items-center gap-2 bg-white text-zinc-800 px-4 py-2 sm:py-3 text-sm rounded-full'
      >
        <img src={assets.credit_icon} alt='credit' className='w-6' />
        <span className='text-zinc-800 font-semibold'>{credit}</span>
      </button>
      <p className='text-zinc-800 font-semibold hidden sm:block'>
        {user.fullName}
      </p>

    <UserButton />
    </div>

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
