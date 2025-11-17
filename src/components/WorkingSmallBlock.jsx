import React from 'react'
import ReactDOM from 'react-dom'
function WorkingSmallBlock({
    childrenIcon
})
{
    return (
        <div className='w-11 h-11 rounded-lg flex items-center justify-center text-white font-medium bg-(--color-primary)'>
            {childrenIcon}
        </div>
    )
}
export default WorkingSmallBlock