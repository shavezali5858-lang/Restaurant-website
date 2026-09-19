import React, { useContext } from 'react'
import { Themeprovider } from './Themecontext'

const Contact = () => {


 const {darkmode}= useContext(Themeprovider)
  return (
    <div className='min-h-screen  flex flex-wrap items-centre gap-5 bg-zinc-800' >

      <div className='w-200 h-100 text-white p-10 '>

        <h1 className='text-xl font-semibold text-green-700 mt-10'>Get in Touch</h1>
        <h1 className='font-bold text-3xl text-white mt-10'>Contact us</h1>

        <div className='mt-8'>

        
        

        <h2 className='font-semibold text-xl text-white mt-10'>📍 Foodie Zone, New Delhi India</h2>
        <br />
        <h2 className='font-semibold text-xl text-white'>📞+ 8826965989</h2>
        <br />
        <h2 className='font-semibold text-xl text-white'>📩 support@foodiezone.in</h2>
        <br />
        <h2 className='font-semibold text-xl text-white'>⌛ Mon-Sun 9-11</h2>
        <br />
</div>

      
      </div>


<div className='w-150 h-100 bg-zinc-900 rounded-xl border mt-15 p-6  gap-5  '>

  <p className='text-gray-400'>Name</p>
  <input type="text" placeholder='Your name'  className='w-80 h-10 bg-zinc-700 border-zinc-800 text-gray-400 rounded-xl p-3'/>

  <p className='text-gray-400'>E-mail</p>
  <input type="text " placeholder='Your@mail.com' className='w-80 h-10 bg-zinc-700 text-gray-400 rounded-xl p-3' />


  <p className='text-gray-400'>Message</p>
   <input type="text " placeholder='Message' className='w-80 h-30 bg-zinc-700 text-gray-400 rounded-xl p-3' />

<button className='w-35 h-10 bg-green-800 text-white px-3 py-2 rounded-xl active:scale-105 ml-10 mt-15'>Send message</button>



</div>


<div className='w-full h-15 bg-green-800 flex items-centre justify-center fixed bottom-0 left-0'>
  <p className='text-centre font-bold text-green-500 text-xl'>2026 FoodieZone. All Rights Reserved</p>

</div>


    
    </div>
  )
}

export default Contact
