import React from 'react'
import linkdin from './Img/linkedin.svg'
import mail from './Img/Mail.svg'


const Buttons = (props) => {
  return (
    <div>
       {/* Buttons */}
       <div className='flex justify-center  space-x-3 pt-4 pb-4 bg-black'>
                    <div className={props.styless}>
                       <div className='flex justify-center items-center bg-white text-black pl-4 pr-4 py-1 space-x-1 rounded-md'>
                          <img src={mail} className='h-4/5' alt="" />
                          <button>Email</button>
                       </div>
                    </div>
                    <div className={props.styles}>
                        <div className='pl-16 ml-0 pr-16 rounded-md bg-white flex justify-between items-center py-1 space-x-1'>
                          <img src={mail} className='h-4/5' alt="" />
                          <button>Email</button>
                        </div>
                    </div>
                    <div className={props.style}>
                      <div className='flex space-x-1 justify-center items-center bg-skyBlue text-white py-1 px-2 rounded-md'>
                          <img src={linkdin} className='h-3/5' alt=""/>
                          <button>Linkdin</button>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default Buttons
