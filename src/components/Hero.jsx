import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { Themeprovider } from './Themecontext';


const Hero = ({name,price,image,addtocart,product,search,Setsearch,tag,tagline,rating}) => {
  const {darkmode}=useContext(Themeprovider)
  return (

    

      
       
      <div className='bg-zinc-900  w-70 rounded-2xl overflow-hidden border border-zinc-700'>
  
  {/* Image area */}
  <div className='relative bg-zinc-950 h-36 flex items-center justify-center'>
    <img src={image} className='h-24 object-contain' />
    <span className='absolute top-2 right-2 bg-green-800 text-green-300 text-xs px-2 py-1 rounded-full'>
      {tag}
    </span>
  </div>

  {/* Content */}
  <div className='p-4'>
    <div className='flex justify-between items-center'>
      <h1 className='text-white font-medium'>{name}</h1>
      <span className='text-yellow-400 text-xs'>{rating}</span>
    </div>
    <p className='text-zinc-500 text-xs mt-1 mb-3'>{tagline}</p>
    <div className='flex justify-between items-center'>
      <p className='text-green-400 font-medium'>₹{price}</p>
      <button className='bg-green-700 text-white px-3 py-1.5 rounded-lg active:scale-105 text-sm flex items-center gap-1'
        onClick={() => addtocart(product)}>
        + Add
      </button>
    </div>
  </div>

</div>
//      <div className={`w-50  rounded-2xl p-6  transition-all duration-300 overflow-hidden   shadow-lg hover:shadow-2xl  hover:-translate-y-3 mb-16 ${darkmode?'bg-zinc-800 border border-orange-500' :'bg-white border-none text-black'}`}>
     
// <div className='relative bg-zinc-950 h-36 flex items-center justify-center'>
//            <img src={image} alt="" className=' h-24   object-contain  ml-5' />
//            <span className='absolute top-2 right-2 bg-green-800 text-green-300 text-xs px-2 py-1 rounded-full'>
//       Bestseller
//     </span>
//            </div>

//           <h1 className={` text-xl font-semibold mt-3 ml-4 ${darkmode?'text-white':'text-black'}`}>{name}</h1>
//           <h1 className='text-green-400 text-lg ml-5'><FontAwesomeIcon icon={faIndianRupeeSign} />
//             {price}</h1>
    



// <button className={`w-25 h-10  ml-12 mt-3 px-2 py-1 rounded-xl active:scale-105 ${darkmode?'bg-green-500 text-white':'bg-green-600 text-white'}`} 
// onClick={()=>{
//    addtocart(product)
// }}
// >+ Add</button> 
//        </div> 
       
  
  )
}

export default Hero
