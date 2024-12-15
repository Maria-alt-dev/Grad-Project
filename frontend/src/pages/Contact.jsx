import React from 'react'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8128.684277835386!2d35.514775780505175!3d33.86847130000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17f3aa826093%3A0x6d4dce82dbf2b182!2sLebanon%20Smile%20Dental%20Center!5e1!3m2!1sen!2slb!4v1734223670621!5m2!1sen!2slb" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Furn El Chebback, main road, Saade center( Crepaway bldg.) <br /> facing Abraj cinema, 4th floor.</p>
          <p className=' text-gray-500'>Tel: 01 287 000<br/> Mob: 71 946 999 <br /> Email: info@lebanon-smile.com</p>
        </div>
      </div>

    </div>
  )
}

export default Contact
