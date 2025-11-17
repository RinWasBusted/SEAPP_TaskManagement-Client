import React from 'react'
import ReactDOM from 'react-dom'
function GroupStastic({
    stasticNumber = 7, 
    title = 'My Teams', 
    Color = '' 
})
{
    return (
        <article 
            className={`relative w-[301px] h-[147px] py-7 px-6 border rounded-[23px] border-[#B3B3B3]`}
            style={{color: Color}}
            >
            <h2 className={`font-medium text-[20px]  font-[Montserrat] text-black`}>{title}</h2>
            <span className='text-[48px]  font-medium font-[Inter]'>{stasticNumber}</span>
            <div 
                className={`absolute w-[31px] h-[31px] flex items-center justify-center text-sm rounded-2xl top-12 left-[252px]`}
                style={{backgroundColor: Color}}
            >
                <i class="fa-brands fa-teamspeak text-white"></i>
            </div>
        </article>
    )
}
export default GroupStastic