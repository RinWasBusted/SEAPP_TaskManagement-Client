import React from 'react'
import ReactDOM from 'react-dom'
import { Gauge } from '@mui/x-charts'
function GroupStatus({
    title = 'Default Tile',
    content = 'Default Content', 
    content = 'DefaultContent', 
    statusValue = 0 
}) {
    return (
        <div className='w-[402px] relative h-[148px] px-8 py-2 flex overflow-hidden rounded-2xl border bg-transparent border-gray-600'>
            <div className='flex-3 flex-col flex items-start justify-between '>
                <div className='pt-3'>
                    <h3 className='text-base line-clam-1 text-left text-black'>{title}</h3>
                    <p className='text-[#747474] mt-2 text-[14px] line-clamp-2 text-wrap w-full'>{content}</p>
                </div>
                <div>
                    <p className='text-[12px] text-[#757070]'>
                        Status:
                        <span className='text-blue-500'> In Progress</span>
                    </p>
                    <ul className='mt-2 text-[12px] text-[#757070] font-medium flex items-center justify-start gap-4'>
                        <li>
                            <i class="fa-solid fa-calendar mr-1"></i>
                            Created At
                        </li>
                        <li>
                            <i class="fa-solid fa-user mr-1"></i>
                            Team leader
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex-2 flex items-center  justify-center'>
                <Gauge width={140} height={140} value={statusValue} startAngle={360} endAngle={0} fontSize={28} text={`${statusValue}%`} fontWeight={500} color='black'/>
            </div>
            <i class="fa-regular fa-circle top-2 left-3 font-black absolute text-blue-500 text-[12px]"></i>
            <i class="fa-solid fa-ellipsis text-2xl right-3 top-1 absolute text-gray-600 "></i>
        </div>
    )
}
export default GroupStatus