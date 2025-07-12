import React from 'react'

function Headers() {
  return (
    <div className='header bg-[#000]'>
        <div className='container flex justify-between items-center py-4 text-white'>
            <div className='logo'>
                <p>Logo</p>
            </div>
            <div className='menu'>
                <ul className='flex gap-10'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='hockey'>Tournaments List</a></li>
                    <li><a href='blog'>Blog</a></li>
                    <li><a href='#'>Contact</a></li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Headers