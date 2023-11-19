import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever is a modern fashion brand dedicated to bringing you stylish, comfortable, and affordable clothing for every moment of life. We carefully curate our collections to blend trend-forward designs with everyday practicality, ensuring you always find something that suits your personality and lifestyle. With a focus on quality fabrics, fresh styles, and thoughtful details, we aim to make fashion simple, enjoyable, and accessible.</p>
          <p>At Forever, we believe that great style should be effortless. That’s why we continually update our collections to offer the latest looks, crafted with comfort and durability in mind. Whether you're dressing for work, outings, or daily wear, our goal is to provide pieces that make you feel confident and inspired. Your trust matters to us, and we work every day to deliver a seamless, satisfying shopping experience.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to deliver exceptional style, quality, and value through thoughtfully crafted apparel. We strive to make fashion enjoyable and affordable while ensuring a seamless shopping experience. With a focus on comfort, trust, and innovation, we aim to become your favourite destination for everyday style.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={"CHOOSE US"}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure every product meets high standards of quality, durability, and comfort. Each item is carefully checked and crafted using premium materials, giving you a reliable and satisfying shopping experience. Your trust matters, and we work hard to deliver products that exceed expectations.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Covenience</b>
          <p className='text-gray-600'>We make shopping effortless with a smooth, user-friendly experience from browsing to checkout. Enjoy quick navigation, multiple payment options, fast delivery, and hassle-free returns—everything designed to give you maximum convenience and comfort while shopping online.</p>
        </div>
        
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptiosl:Customer Servie</b>
          <p className='text-gray-600'>Our support team is always ready to assist you with any questions or concerns. Whether it’s help with orders, returns, or product details, we aim to provide quick, friendly, and reliable service to ensure a seamless and enjoyable shopping experience every time.</p>
        </div>
      </div>

    <NewsLetterBox/>
     
      
    </div>
  )
}

export default About
