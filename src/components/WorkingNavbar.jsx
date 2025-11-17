import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'
import WorkingSmallBlock from './WorkingSmallBlock'
import { getCurrentDate } from '../services/getDate'

function WorkingNavbar() 
{
    const {day , month , year , weekDay} = getCurrentDate() 
    return (
        <nav className='w-screen h-25 left-0 z-99999 bg-white fixed top-0 shadow-lg gap-12 pt-9 px-[60px] py-8 flex items-center justify-between'>
            <div className='flex-1'>
                <Logo />
            </div>
            <div className='flex-4 w-[695px] h-11 relative'>
                <input
                    className='w-full h-full text-(--color-text-desc) text-base font-semibold rounded-lg px-5 shadow-[0_4px_10px_rgba(0,0,0,0.1)] focus:shadow-[0_6px_14px_rgba(0,0,0,0.15)] outline-none transition-all duration-300'
                    placeholder='Search your task here...'
                />
                <div className='absolute top-0 right-0'>
                    <WorkingSmallBlock childrenIcon={<i class="fa-solid fa-magnifying-glass"></i>} />
                </div>
            </div>
            <div className='flex-2  flex items-center justify-between'>
                <span className='flex-1 block'>

                </span>
                <div className='flex-1 items-center flex gap-2'>
                    <WorkingSmallBlock childrenIcon={<i class="fa-regular fa-bell"></i>} />
                    <WorkingSmallBlock childrenIcon={<i class="fa-regular fa-calendar"></i>}/>
                </div>
                <div className='flex-1 text-base font-medium'>
                    <span className='block text-base font-medium text-black'>{weekDay}</span>
                    <span className='block text-base text-[#3ABEFF]'>{`${day}/${month}/${year}`}</span>
                </div>
            </div>
        </nav>
    )
}
export default WorkingNavbar