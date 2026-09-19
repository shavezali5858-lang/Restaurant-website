import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Themeprovider } from './Themecontext';
import { Link } from 'react-router-dom';


const Navbar = ({setcartopen,search,setSearch}) => {



const {darkmode,setdarkmode}=useContext(Themeprovider)








  return (
    <div className={`h-20 flex justify-between p-6 ${darkmode?'bg-zinc-900 text-zinc-100':'bg-green-800 text-white'}` }>
        <h1 className='text-2xl font-bold text-white'>FOODIEZONE</h1>


        <div>


         


         
<ul className='flex justify-between gap-8 text-white font-semibold  '>


<Link to={'/admin'}>Admin page</Link>
  
  

    <li onClick={()=>{
      setcartopen(true)
    }}
    className='cursor-pointer'
    >Cart  <FontAwesomeIcon icon={faCartShopping} /></li>


    <Link to={'/about'}>About us</Link>
    <Link to={'/contact'}>Contact us</Link>
    <button className={`w-35 h-10 px-3 py-2 rounded-xl  text-white active:scale-105 ${darkmode?'bg-green-500 text-white':'bg-green-600 text-white'}`}
  onClick={()=>{
    setdarkmode(!darkmode)
  }}
  
  >
    {darkmode ? '☀️':'🌙'}
    </button>

   
</ul>


        </div>
      
    </div>
  )
}

export default Navbar
