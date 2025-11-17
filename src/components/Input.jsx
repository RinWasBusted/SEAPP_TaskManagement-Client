import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { Eye, EyeOff } from 'lucide-react'
import { button } from 'framer-motion/client';


export default function Input({
    title = 'Default title',
    isPassword = false,
    placeholder = '',
    isEmail = false,
    isRequired = false,
    name = ''
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-full mt-3'>
            <label htmlFor={name} 
                   className='font-semibold text-[20px] font-[Montserrat] text-(--color-text) mb-1'>
                    {title}
            </label>

            <div className='relative'>
                <input
                    id={name}
                    type={isPassword ? (showPassword ? "text" : "password") : isEmail ? "email" : "text"}
                    required={isRequired}
                    name={name}
                    placeholder={placeholder}
                    className={`w-full text-(--color-text-desc) h-[45px] text-[18px] rounded-[5px] px-3 pr-10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] focus:shadow-[0_6px_14px_rgba(0,0,0,0.15)] border-[0.5px] border-(--color-text)  outline-none transition-all duration-300 ${isPassword ? 'text-security-star' : ''}`}
                />
                {isPassword && (
                    <button
                        type='button'
                        onClick={() => setShowPassword(s => !s)}
                        aria-label={showPassword ? "Hide password": "Show password"}
                        className='absolute right-2 top-1/2 -translate-y-1/2 p-1 text-(--color-text-desc) hover:opacity-80'>
                        {showPassword ? <EyeOff size={20} color='#757070'/> : <Eye size={20} color='#757070'/>}
                    </button>
                )}
            </div>
        </div>

    )
}
