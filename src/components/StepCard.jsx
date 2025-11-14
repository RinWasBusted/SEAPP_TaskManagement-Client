import React from 'react'
import ReactDOM from 'react-dom'
function StepCard({
    index = 1 , title = 'Progress Tracking' , content = 'Sign up in seconds and set up your personalized workspace. No credit card required for the free trial.'
}) {
    return (
        <div className='w-[431px] relative h-150 rounded-2xl overflow-hidden flex flex-col'>
            <div className='w-[70px] h-[70px] flex absolute text-2xl font-medium items-center justify-center text-center rounded-full top-[19px] left-[15px] bg-[#ff6766] text-white'>
                {index}
            </div>
            <div className='flex-1 bg-cover bg-center bg-no-repeat bg-black'>

            </div>
            <div className='p-5 bg-white flex-1 flex items-start justify-center gap-2 flex-col'>
                <h2 className='text-[32px] font-medium w-full text-black text-left'>{title}</h2>
                <p className='text-left w-[383px] font-normal text-2xl text-gray-600 line-clamp-4'>
                    {content}
                </p>
            </div>



        </div>
    )
}
export default StepCard