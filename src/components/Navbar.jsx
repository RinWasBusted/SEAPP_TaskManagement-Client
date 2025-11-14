import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'



function Navbar() {
    return (
        <div className='w-screen left-0 z-99999 bg-white fixed top-0 shadow-lg h-18 px-16 py-8 flex items-center justify-between'>
            <Logo />
            <div className='min-h-20 flex text-lg items-center font-medium  text-black gap-3 justify-evenly'>
                <motion.button
                    className='py-2 px-8 block rounded-xl bg-[#ff6568] text-white cursor-pointer'
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    Sign up
                </motion.button>

                <motion.button
                    className='py-2 px-8 block rounded-xl bg-[#ff6568] text-white cursor-pointer'
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    Sign up
                </motion.button>
            </div>
        </div>
    )
}
export default Navbar