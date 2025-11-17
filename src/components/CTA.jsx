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
    icon = '',
    type = ''})
{
    return(
        <button style={{width : width, height : height, backgroundColor: backgroundColor, color: color}} 
                type={type}
                className={` font-medium rounded-lg flex items-center text-[22px] font-[Inter] cursor ${border && 'border border-(--color-text-desc)'}`}>
            <div className='mx-auto flex items-center'>
                {icon === 'google' && <img src={google} alt="Google" className='size-6' />}
                <div className={`inline-block ${icon && 'ml-2'} mx-auto`}>
                    {title}
                </div>
            </div>
        </button>
    )
}