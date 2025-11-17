import React from 'react'
import ReactDOM from 'react-dom'
import google from '../assets/google.png';

export default function CTA({
    width = '100%',
    height = 50,
    title = 'login',
    backgroundColor = '#FF6767',
    color = 'White',
    border = false,
    type = '', 
    icon = '' }) {
    return (
        <button 
            style={{ width: width, height: height, backgroundColor: backgroundColor, color: color }} 
            className={` font-medium rounded-lg cursor-pointer text-[22px] font-[Inter] cursor ${border && 'border border-(--color-text-desc)'}`}
            type={type}
            >
            {icon && <i class="fa-brands fa-google"></i>}
            <div className={`inline-block ${icon && 'ml-2'} `}>
                {title}
            </div>
        </button>
    )
}