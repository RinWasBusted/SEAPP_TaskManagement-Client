import React from 'react'
import ReactDOM from 'react-dom'
function GroupStastic({
    stasticNumber = 7, 
    title = 'My Teams', 
    color = '#333'
})
{
    return (
        <article className={`relative w-[301px] h-[147px] py-7 px-6 border text-[${color}] rounded-[23px] border-[#B3B3B3]`}>
            <h2 className={`font-medium text-[20px]  font-[Montserrat] text-black`}>{title}</h2>
            <span className='text-[48px]  font-medium font-[Inter]'>{stasticNumber}</span>
            <div className={`absolute w-[31px] h-[31px] flex items-center justify-center text-sm rounded-full top-12 left-[252px] bg-[${color}]`}>
                <i class="fa-brands fa-teamspeak text-white"></i>
            </div>
        </article>
    )
}
export default GroupStastic