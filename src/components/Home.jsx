import React, { useContext } from 'react'
import { Themeprovider } from './Themecontext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {





  const {darkmode}=useContext(Themeprovider)
  return (
    <div className={`h-170  flex justify-between items-centre p-10 ${darkmode ? 'bg-zinc-950 ':'bg-white'} `}>
        <div className=' flex flex-col gap-5 '>
<h1 className={` font-semibold text-lg w-85 h-7  rounded-2xl ${darkmode? 'text-zinc-400 bg-green-900':' bg-green-200 text-green-800'}`}>  <FontAwesomeIcon icon={faMotorcycle} /> Free delivery on order above <FontAwesomeIcon icon={faIndianRupeeSign} />299</h1>
<h1 className={`font-bold  text-5xl ${darkmode?'text-white':'text-green-900'}`}>Delicious</h1>
<h1 className={`font-bold  text-5xl ${darkmode?'text-white':'text-green-900'}`}>Food</h1>
<h1 className={`font-bold  text-5xl ${darkmode?'text-white':'text-green-900'}`}>Delivered</h1>
<h1 className={`font-bold  text-5xl ${darkmode?'text-white':'text-green-900'}`}>Fast</h1>

<p  className={` font-semibold text-lg ${darkmode? 'text-zinc-400':'text-green-800'}`}>Order your favourite meals from the best restaurants near you.</p>
<div className='flex gap-4'>
<button className={`w-35 h-10 px-3 py-2 rounded-2xl  text-white ${darkmode?'bg-green-500':'bg-green-800'}` }>Order Now</button>
<button  id="menu" 
className={`w-35 h-10 px-3 py-2 rounded-2xl  text-white ${darkmode?'bg-green-500':'bg-green-800'}` } onClick={()=>{
document.getElementById("menu").scrollIntoView({behavior:'smooth', block:'start'})

}}>
  View Menu</button>
</div>

<div className='flex gap-10 pt-6 border-t border-gray-200'>

<div className='flex gap-8 divide-x divide-gray-200'>
<div className='px-6'>
  <h1 className={`text-2xl font-bold ${darkmode?'text-white':'text-green-700'}`}>30+</h1>
  <p className={` font-semibold ${darkmode?'text-white':'text-green-600'}`}>Menu Items</p>
</div>

<div className='px-6'>
  <h1 className={`text-2xl font-bold ${darkmode?'text-white':'text-green-700'}`}>30 min</h1>
  <p className={` font-semibold ${darkmode?'text-white':'text-green-600'}`}>Avg Delivery</p>
</div>

<div className='px-6'>
  <h1 className={`text-2xl font-bold ${darkmode?'text-white':'text-green-700'}`}>4.8 <FontAwesomeIcon icon={faStar} /></h1>
  <p className={` font-semibold ${darkmode?'text-white':'text-green-600'}`}>Ratings</p>
</div>

</div>
</div>



        </div>

 <div className='flex mr-20 mt-10 relative w-80 h-80 '>

    

 <div className='w-80 h-80 bg-green-100 rounded-full flex items-center justify-center text-8xl'>
    🍕
  </div>

    <div className='absolute -top-2 -right-3 bg-white border border-green-200 rounded-xl p-2 flex items-center gap-2 shadow-sm'>
    <span>🍔</span>
    <div>
      <p className='text-xs font-semibold text-green-800'>Burger</p>
      <p className='text-xs text-green-600'>₹199</p>
    </div>
  </div>




   <div className='absolute -bottom-2 -left-5 bg-white border border-green-200 rounded-xl p-2 flex items-center gap-2 shadow-sm'>
    <span>🍜</span>
    <div>
      <p className='text-xs font-semibold text-green-800'>Noodles</p>
      <p className='text-xs text-green-600'>₹249</p>
    </div>
  </div>

</div>

</div>









     
    // </div>
  )
}

export default Home
