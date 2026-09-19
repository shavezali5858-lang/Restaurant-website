import React, { useContext } from 'react'
import { Themeprovider } from './Themecontext'




const reviews=[
{
  name:"shavez",
ratings:5,
review:"Amazing food and excellent service! The staff was friendly and the atmosphere was perfect. Highly recommended."
},


{
  name:"rahul",
  ratings:5,
  review:"One of the best dining experiences I've had. Delicious dishes, quick service, and great value for money.",
},

{
  name:"Ashish",
  ratings:4.5,
  review:"Fantastic food and exceptional hospitality. Every dish was flavorful and prepared to perfection."
},
{

  name:"soha",
  ratings:4,
  review:"Five stars all the way! The food was incredible, and the staff made us feel welcome throughout our visit."
}



]

const About = () => {

   const {darkmode}=useContext(Themeprovider)
  return (
    <div className={`min-h-screen p-8 ${darkmode?'bg-zinc-900 text-white font-semibold' : 'text-black font-semibold bg-slate-50 '}`}  >
  <h1 className={`text-4xl font-bold text-center ${darkmode?'text-white':'text-slate-900'}`}>
    About Us
  </h1>

  <p className={`text-center mt-4 max-w-2xl mx-auto rounded-xl p-6 shadow-sm ${darkmode?'text-zinc-300 font-semibold ':' b text-slate-600 font-semibold'}`}>
    We are passionate about serving fresh and delicious
    meals made with quality ingredients.
  </p>

  <div className="grid grid-cols-3 gap-6 mt-10">
    <div className={` p-5 rounded-lg ${darkmode?'bg-zinc-800 text-white':'bg-white border border-slate-200 rounded-xl shadow-sm text-green-700'}`}>
      <h2>🍔 Fresh Food</h2>
      <p>Prepared daily with quality ingredients.</p>
    </div>

    <div className={` p-5 rounded-lg ${darkmode?'bg-zinc-800 text-white':'bg-white border border-slate-200 rounded-xl shadow-sm text-green-700'}`}>
      <h2>👨‍🍳 Expert Chefs</h2>
      <p>Experienced chefs crafting every dish.</p>
    </div>

    <div className={` p-5 rounded-lg ${darkmode?'bg-zinc-800 text-white':'bg-white border border-slate-200 rounded-xl shadow-sm text-green-700'}`}>
      <h2>🚚 Fast Delivery</h2>
      <p>Hot and fresh food delivered quickly.</p>
    </div>
  </div>
<h1 className='font-bold text-2xl ml-10 mt-10'>REVIEWS</h1>
  <div className='grid grid-cols-3 gap-5 p-3'>
    
{reviews.map((item,index)=>{
  return(

    <div key={index} className={` p-6  font-semibold rounded-xl ${darkmode?'bg-gray-800 border border-gray-700':'bg-amber-50 border border-amber-200'}`}>
<h2>{item.name}</h2>
<h2 className={`${darkmode?'text-amber-400':'text-green-600'}`}>{" ⭐".repeat(item.ratings)}</h2>
<p>{item.review}</p>
</div>

  )








})}

  </div>







</div>

  )
}

export default About
