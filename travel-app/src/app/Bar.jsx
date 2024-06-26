import React from 'react'
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaFacebook , FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Bar() {
  return (
  <div className='bg-gray-900' style={{height: '25px'}}>
  <div className='flex justify-between items-center px-4 text-white'>
    <div className='flex items-center gap-4'>
      <span className='flex gap-1'> 
      <IoMdCall className='text-orange-400 text-lg mt-1' />
      <p className='italic font-serif'>071-256-856</p>
      </span>

      <span className='flex gap-1'>
      <IoMail className='text-orange-400 text-lg mt-1' />
      <p className='italic font-serif'>aud@email.com</p>
      </span>         
    </div>
    <div className='flex items-center'>
      <p className='text-center italic font-extralight font-serif'>ALEX DUNN TOURS</p>
    </div>

    <div className='flex items-center gap-4'>
      <FaFacebook className='text-orange-400 text-lg' />
      <FaInstagram className='text-orange-400 text-lg' />
      <BsTwitterX className='text-orange-400 text-lg' />
    </div>
  </div>
</div>
  )
}
