import React from 'react'

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
      <p className='relative bottom-0 '>
        Copyright © {currentYear}
      </p>
  )
}

export default Footer