import React from 'react'

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
      <p className='bg-gray-200
      text-2xl text-black text-center
      border-t-4
      fixed
      inset-x-0
      bottom-0
      p-4'>
        Copyright © {currentYear}
      </p>
  )
}

export default Footer