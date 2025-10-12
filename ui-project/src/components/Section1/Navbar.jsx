import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-16'>
        <h4 className='bg-black text-white py-3 px-3 rounded-full uppercase text-xs'>Target Audience</h4>
        <button className='bg-gray-200 py-2 px-6 uppercase rounded-full tracking-widest text-xs'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar