import React from 'react';
import itworx from '../Images/ITWorx White Logo.png';

const Navbar = () => {
  const menuItems = 'Technical Career Compass';

  return (
    <nav className="text-white p-1 md:p-3 bg-[#6b1d1b]">
        <img className='w-4/12 h-4/12 md:w-3/12 md:h-3/12' src={itworx} alt='itworx-image' />
        <h3 className='text-center text-xl md:text-2xl'>{menuItems}</h3>
    </nav>
  );
};

export default Navbar;