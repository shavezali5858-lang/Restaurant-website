import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {
  faInstagram,
  faFacebook,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  return (
    <div className='bg-green-900 p-12  '>

      <div className='grid grid-cols-4 gap-6'>


        <div>

<h1 className='text-white text-2xl font-bold mb-4 '>FOODIEZONE</h1>

<div className='flex flex-wrap gap-4 mt-5'>


<p className='text-green-300'>Fresh & Fast food delivery at your doorstep. Order your favourite meals anytime!</p>
<p  className='text-3xl text-white'>  <FontAwesomeIcon icon={faInstagram} /> </p>
<p className='text-3xl text-white'>  <FontAwesomeIcon icon={faFacebook} /></p>
<p className='text-3xl text-white'> <FontAwesomeIcon icon={faXTwitter} /></p>
</div>
        </div>



  
        <div>

        <h1 className='text-white font-bold '>QUICK LINKS</h1>
<div className=' text-green-300  font-semibold'>
<Link to={'/home'}>Home</Link>
<br />
<Link to={'/about'}>About</Link>
<br />
<Link to={'/contact'}>Contact</Link>
</div>



        </div>




<div>
<h1 className='text-white font-bold'>CONTACT</h1>
 <h2 className='font-semibold  text-white mt-10'>📍 Foodie Zone, New Delhi India</h2>
        <br />
        <p className='font-semibold  text-green-300'>📞+ 8826965989</p>
        <br />
        <p className='font-semibold  text-green-300'>📩 support@foodiezone.in</p>
        <br />
        <p className='font-semibold  text-green-300'>⌛ Mon-Sun 9-11</p>
        <br />

</div>


<div>


<h1 className='text-white font-bold'>POPULAR ITEMS</h1>

<p className='text-green-300'>Burger</p>
<p className='text-green-300'>Pizza</p>
<p className='text-green-300'>Noodles</p>
<p className='text-green-300'>Ice cream</p>

</div>

<div className=' w-screen  bg-green-950 py-3 border-b-white '>
  <h1 className='text-green-300 font-bold text-center'>© 2026 FoodieZone. All Rights Reserved.</h1>

</div>







      </div>
      
    </div>
  )
}

export default Footer
