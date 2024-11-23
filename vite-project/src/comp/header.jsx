import React from 'react'

const Header = () => {
  return (
    <>
      {/* Header Section */}
      <div className='p-5 bg-gradient-to-r from-blue-500 to-purple-600 flex justify-between items-center'>
        <h1 className='text-white text-3xl font-semibold'>Weekly Habit Tracker</h1>
        <p className="text-white text-sm font-light">Developed by <span className="font-bold text-yellow-400">Azan Imtiaz</span></p>
      </div>
    </>
  );
}

export default Header;
