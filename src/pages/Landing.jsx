import React from 'react'
import ReactDOM from 'react-dom'
import Section1 from '../components/Landing/Section1'
function Landing()
//Boc ngoai cung ben ngoai la LandingpageLayout. Phan tu ben trong day la landingPage. Trong landingpage thi chua nhieu section
//Kich thuoc cua layout la 1440px, landing page lay w-full = 1440px, moi section cugn lay w-full 1440px 
{
    return (
        <div className='bg-[#f8f9fe]'>
            <Section1 /> 

        </div>
    )
}
export default Landing