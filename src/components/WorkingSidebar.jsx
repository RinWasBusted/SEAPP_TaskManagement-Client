import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './Avatar'
import SidebarItem from './SidebarItem'
function WorkingSidebar() {
    return (
        <div className='w-[365px] h-[868px] rounded-2xl bg-(--color-primary) fixed left-0 top-42 pt-30 shadow-[0_10px_20px_rgba(0,0,0,0.25)]'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                <Avatar/>
            </div>
            <ul className='w-full flex items-center justify-between flex-col gap-2'>
                <SidebarItem icon={<i class="fa-regular fa-house"></i>} title='Dashboard'/> 
                <SidebarItem icon={<i class="fa-solid fa-people-group"></i>} title='Teams'/> 
                <SidebarItem icon={<i class="fa-solid fa-list-check"></i>} title='My Tasks'/> 
                <SidebarItem icon={<i class="fa-solid fa-gear"></i>} title='Settings' /> 
                
            </ul>
        </div>
    )
}
export default WorkingSidebar