import React from 'react'
import ReactDOM from 'react-dom'
import SmallBlock from './SmallBlock'
function Section1() {

    return (
        <div className='w-full bg-[#f8f9fe] block min-h-60 pt-28 pb-8 px-10'>
            <button className='text-black rounded-3xl px-10 py-2 text-base bg-white shadow-lg'>
                Boost your productivity
            </button>
            <div className='flex flex-1 gap-3 items-center justify-between pt-8'>
                <div className='flex flex-col gap-4 flex-1'>
                    {/* heading */}
                    <h2 className='text-5xl font-medium text-black'>
                        Manage your Task
                        <span className=' text-[#ff6568]'> Efforlessly</span>
                    </h2>
                    {/* paragraph */}
                    <p className='block w-120 text-black pt-6 text-lg'>
                        The ultimate task management solution for teams and individuals. Stay organized, meet deadlines, and achieve your goals with NoTask.
                    </p>
                    <div>
                        {/* button sign up */}
                        <button className='px-14 grow-0 block py-4 mt-12 rounded-4xl shadow-xl text-2xl cursor-pointer bg-[#ff6568]'>
                            Sign Up Right Now
                        </button>
                        <ul className='flex text-black items-center w-100 justify-between grow-0 mt-12 divide-x-2 divide-gray-500'>
                            <SmallBlock analysis={'10K+'} title={'User Rating'} />
                            <SmallBlock analysis={'10K+'} title={'User Rating'} />
                            <SmallBlock analysis={'10K+'} title={'User Rating'} />
                        </ul>
                    </div>

                </div>

                <div className='flex-1'>

                </div>
            </div>





        </div>
    )
}
export default Section1