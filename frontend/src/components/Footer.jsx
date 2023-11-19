import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-40 text-sm'>

      <div className='grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10'>

        <div>
          <img 
  src={assets.logo}
  className="w-44 brightness-0"
  alt="logo"
/>
          <p className='w-full md:w-2/3 text-gray-600'>
            Forever is a modern fashion brand offering stylish, comfortable, and affordable apparel for everyday wear. We focus on quality, design, and customer satisfaction, bringing you collections that match your lifestyle. reliable shopping experience with us.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-1212-3233</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © 2024 forever.com – All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
