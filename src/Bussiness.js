import React from 'react'
import logo from './Img/user.png'
import CardFooter from './Cadfooter'
import Buttons from './Buttons'


const Bussiness = (props) => {
  return (
    <div className='flex bg-veryDarkBlue w-full md:w-[40%] md:px-10 md:py-10 lg:py-0  justify-center md:ml-9 '>
      <div className='w-56 md:w-[100%] lg:w-56 pt-4 pb-3'>
      <div>
          {/* Information */}
          <div className='flex flex-col items-center '>
              {/* Image */}
              <div className=''>
                  <img src={logo} alt="" />
              </div>
              {/* User */}
              <div className='bg-black flex flex-col items-center justify-center text-white w-full'>
                  <div className='flex flex-col items-center'>
                      <h3 className='font-bold text-3xl pt-4 '>{props.name}</h3>
                      <p className='text-darkGray text-sm '>{props.job}</p>
                      <a href="" className='pt-1 text-sm'>{props.website}</a>
                  </div>
               </div>
           </div>
       </div>
       <Buttons style={props.buttons} styles={props.axe} styless={props.axes}/>
       {/* About */}
       <div className='bg-black text-white pr-4 pl-4 font-sans pb-4'>
         <h3 className='font-bold text-1xl'>About</h3>
         <p className='text-xs font-thin tracking-tighter'>
             I am a frontend developer with
             a particular interest in making 
             things simple and automating daily 
             tasks. I try to keep up with security and 
             best practices, and am always looking for new 
             things to learn.</p>

             <h3 className='font-bold text-1xl pt-2'>Intrests</h3>
             <p className='text-xs font-thin  leading-none'>
                Food expert. Music scholar. Reader. Internet 
                fanatic. Bacon buff. Entrepreneur. Travel geek. 
                Pop culture ninja. Coffee fanatic.</p>
       </div>
       {/* Footer */}
       <CardFooter style={props.names}/>
      </div>
     
    </div>
    
  )
}

export default Bussiness
