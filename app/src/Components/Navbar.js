import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between item-center w-[100vw] pt-4 pl-10 pr-10'>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center'>
            <img src='https://i.imgur.com/LzRvg4b.png' className='w-16' alt='GDSC'/>
        </div>
        <div className= 'flex flex-col justify-between items-left pl-6 text-[#72777e]'>
            <div className='text-xl font-Roboto'>Developer Student Clubs</div>
            <div className='text-sm font-medium  '>Silicon Insitute of Technology</div>
        </div>
      </div>

      <div className='text-lg font-semibold flex justify-center items-center gap-12 pr-0'>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/about'>About Us</Link></div>
        <div><Link to='/projects'>Projects</Link></div>
        <div><Link to='/team'>Team</Link></div>
        <div><Link to='/contact'>Contact Us</Link></div>
      </div>

      <div className='flex justify-center items-center gap-10'>

        <Link to='/join/community'><Button colorScheme='messenger'>Join our Community</Button></Link>
        <Link to='/join/faq'></Link><Button colorScheme='messenger'>FAQ ?</Button>

      </div>
    </div>
  )
}

export default Navbar
