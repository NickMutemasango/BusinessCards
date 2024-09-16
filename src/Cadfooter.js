import React from 'react'
import twitter from './Img/Twitter Icon.svg'
import facebook from './Img/Facebook Icon.svg'
import github from './Img/GitHub Icon.svg'
import instagram from './Img/Instagram Icon.svg'
import linkdin from './Img/Linkedin Icon.svg'



const CardFooter = (props) => {
  return (
    <div className='flex space-x-4 bg-darkest justify-center p-3 rounded-br-lg rounded-bl-lg'>
    <img src={twitter} alt="" />
    <img src={facebook} alt="" /> 
    <img src={github} alt="" />
    <img src={linkdin} alt="" className={props.style} />
    <div>
    <img src={instagram} alt="" />
    </div>
   </div>
  )
}

export default CardFooter
