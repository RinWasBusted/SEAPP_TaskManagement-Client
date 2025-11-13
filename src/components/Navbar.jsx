import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './Logo'



function Navbar() {
    return (
        <div className='w-screen left-0 z-[999999] fixed top-0 shadow-lg h-18 px-16 py-8 flex items-center justify-between'>
            <Logo />
            <div className='min-h-20 flex text-lg items-center font-medium text-white gap-3 justify-evenly'>
                <button className='py-2 px-8 block rounded-xl bg-[#ff6568] '>
                    Sign in
                </button>
                <button className='py-2 px-8 block rounded-xl bg-[#ff6568]'>
                    Sin up
                </button>
            </div>
        </div>
    )
}
export default Navbar