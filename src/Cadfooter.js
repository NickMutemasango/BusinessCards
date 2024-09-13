import React from 'react'
import twitter from './Img/Twitter Icon.png'
import facebook from './Img/Facebook Icon.png'
import github from './Img/GitHub Icon.png'
import instagram from './Img/Instagram Icon.png'
import linkdin from './Img/Linkedin Icon.png'



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
