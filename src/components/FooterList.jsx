import React from 'react'
import ReactDOM from 'react-dom'
function FooterList({
    title = 'Company', 
    linkList = [] 
}) {
    return (
        <>
            <h3 className='font-medium text-black text-2xl text-left mb-3'>{title}</h3>
            <ul className='flex flex-col text-[20px] decoration-0 items-start justify-start gap-2 text-[#757070]'>
                <li><a className='text-[#757070] decoration-0' href='/'>About us</a></li>
                <li><a className='text-[#757070] decoration-0' href='/'>About us</a></li>
                <li><a className='text-[#757070] decoration-0' href='/'>About us</a></li>
                <li><a className='text-[#757070] decoration-0' href='/'>About us</a></li>
            </ul>
        </>
    )
}
export default FooterList