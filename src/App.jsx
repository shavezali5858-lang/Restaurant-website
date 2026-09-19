import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Admin from './components/Admin';

const App = () => {

const [Category, setCategory] = useState("all")

  const [search, setSearch] = useState("")

  const [cartopen, setcartopen] = useState(false)
  const [cart, setcart] = useState([]);

  const addtocart = (product) => {
    setcart([...cart, product]);
  };


const [newcart, setnewcart] = useState([])
const removecart=(index)=>{
  const newcart= cart.filter((_, i) => i !== index)
  setcart(newcart)

}



const clearcart=()=>{
  setcart([])
}


  const products = [
    {
      id: 1,
      name: "burger",
      price:199, 
      image: "https://png.pngtree.com/png-clipart/20190515/original/pngtree-burger-vector-icon-png-image_3671121.jpg",
      category:"food",
       tag: "Best Seller",
    tagline: "Juicy, cheesy, and grilled to perfection.",
    rating:"⭐4.7"
    },
    {
      id: 2,
      name: "pizza",
      price: 349,
      image: "https://static.vecteezy.com/system/resources/previews/047/491/124/non_2x/pizza-3d-realistic-icon-illustration-isolated-on-transparent-background-png.png",
   category:"food",
      tag: "Wood Fired",
    tagline: "Freshly baked with premium toppings.",
    rating:"⭐4.8"
    },
    {
      id: 3,
      name: "noodles",
      price: 249,
      image: "https://cdn-icons-png.flaticon.com/512/8775/8775447.png",
       category:"food",
           tag: "Chef's Special",
    tagline: "Wok-tossed with authentic Asian flavors.",
    rating:"⭐4.4"
    },
    {
      id: 4,
      name: "fries",
      price: 299,
      image: "https://cdn-icons-png.flaticon.com/512/889/889779.png",
       category:"food",
          tag: "Extra Crispy",
    tagline: "Golden, crunchy, and perfectly seasoned.",
    rating:"⭐4.3"
    },
    {
      id:5,
       name:"pasta",
       price:349,
       image:"https://static.vecteezy.com/system/resources/thumbnails/071/121/311/small_2x/pasta-with-tomato-sauce-icon-in-cartoon-style-on-transparent-background-png.png",
        category:"food",
          tag: "Italian Classic",
    tagline: "Creamy sauce with authentic Italian taste.",
    rating:"⭐4.2"
    },
    
     {
      id:6,
      name:"Sandwich",
      price:299,
      image:"https://img.magnific.com/free-vector/sandwich-food-floating-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-flat_138676-7652.jpg?semt=ais_hybrid&w=740&q=80",
 category:"food",
  tag: "Freshly Made",
    tagline: "Loaded with fresh veggies and tasty fillings.",
    rating:"⭐4.3"
     },

     {
      id:7, 
      name:"watermelon juice",
      price:99,
      image:"https://cdn-icons-png.flaticon.com/512/8979/8979228.png",
      category:"drinks",
        tag: "Summer Special",
    tagline: "Cool, refreshing, and naturally sweet.",
    rating:"⭐4.4"
    },

     {
      id:8,
      name:"mango juice",
      price:149,
      image:"https://png.pngtree.com/png-clipart/20240608/original/pngtree-mango-juice-glass-with-mangoes-and-slices-summer-drink-png-image_15272767.png",
            category:"drinks",
                tag: "Seasonal Favorite",
    tagline: "Made from juicy, handpicked mangoes.",
    rating:"⭐4.5"
    },
    
    
    
    {id:9,
      name:" Icecream",
      price:99,
      image:"https://png.pngtree.com/png-clipart/20221022/original/pngtree-colorful-ice-cream-icon-png-image_8711982.png",
      category:"dessert",
       tag: "Sweet Treat",
    tagline: "Creamy scoops for every dessert lover.",
    rating:"⭐4.7"
    }, 


  {
    id: 10,
    name: "Biryani",
    price: 249,
    image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd",
    category:"food",
     tag: "Signature Dish",
    tagline: "Fragrant rice layered with rich spices.",
    rating:"⭐4.9"
  },
  {
    id: 11,
    name: "Paneer Tikka",
    price: 199,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
          category:"food",
            tag: "Tandoor Fresh",
    tagline: "Smoky, spicy, and grilled to perfection.",
    rating:"⭐4.2"
  },
  {
    id: 12,
    name: "Fried Rice",
    price: 179,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    category:"food",
     tag: "Quick Bite",
    tagline: "Perfectly stir-fried with fresh vegetables.",
    rating:"⭐4.0"

  },
  {
    id: 12,
    name: "Dosa",
    price: 149,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    category:"food",
     tag: "South Indian",
    tagline: "Crispy, golden, and served with chutneys.",
    rating:"⭐3.7"
  },
  {
    id: 14,
    name: "Chicken Tikka",
    price: 299,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    category:"food",
     tag: "Protein Packed",
    tagline: "Tender chicken marinated in aromatic spices.",
    rating:"⭐4.1"
  },
  {
    id: 15,
    name: "Samosa",
    price: 49,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    category:"food",
     tag: "Tea Time Favorite",
    tagline: "Crispy outside with a flavorful filling.",
    rating:"⭐4.0"
  },
  {
    id: 16,
    name: "Chocolate Cake",
    price: 159,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    category:"dessert",
     tag: "Chocolate Lover",
    tagline: "Rich, moist, and irresistibly chocolaty.",
    rating:"⭐3.9"
  },
  {
    id: 17,
    name: "Donut",
    price: 99,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    category:"dessert",
     tag: "Freshly Glazed",
    tagline: "Soft, fluffy, and melt-in-your-mouth delicious.",
    rating:"⭐4.3"
  },
  {
    id: 18,
    name: "Momos",
    price: 129,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46",
    category:"food",
      tag: "Street Favorite",
    tagline: "Steamed to perfection with spicy dip.",
    rating:"⭐4.2"
   },
  {
    id: 19,
    name: "Falooda",
    price: 119,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    category:"dessert",
        tag: "Royal Dessert",
    tagline: "A colorful delight loaded with sweetness.",
    rating:"⭐3.6"
  },
  {
    id: 20,
    name: "Pav Bhaji",
    price: 149,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    category:"food",
     tag: "Mumbai Special",
    tagline: "Buttery pav served with spicy bhaji.",
    rating:"⭐4.4"
  },
  {
    id: 21,
    name: "Cold Coffee",
    price: 99,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    category:"drinks",
     tag: "Cafe Style",
    tagline: "Chilled, creamy, and full of coffee flavor.",
    rating:"⭐4.8"
  }
];



  




// const filteredproducts= products.filter((item)=>
//   item.name.toLowerCase().includes(search.toLowerCase())
// const matchcategory=Category==="all" ||item.category===Category
// )
const filteredproducts = products.filter((item) => {
  const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
  const matchesCategory = Category === "all" || item.category === Category
  return matchesSearch && matchesCategory
})



  const HomePage = () => {
    return (
      <>
        <Navbar setcartopen={setcartopen}
     
        />
        {/* <Admin/> */}

        <Home />

        <div className="min-h-screen bg-zinc-800 ">

             <div className=' p-6 flex justify-between'>
          <h1 className="text-white font-bold text-2xl p-3">
            Menu
          </h1>

      

<button className={ ` w-20 h-8 px-4 py-2 rounded-xl text-sm ${Category==="all" ?'bg-green-600 text-white':'bg-zinc-700 text-white'}`}
onClick={()=>{
  setCategory("all")
}}
>All</button>


<button className={ ` w-20 h-8 px-4 py-2 rounded-xl text-sm ${Category==="food" ?'bg-green-600 text-white':'bg-zinc-700 text-white'}`}
onClick={()=>{
  setCategory("food")
}}
>Food</button>


<button className={ ` w-20 h-8 px-4 py-2 rounded-xl text-sm ${Category==="drinks" ?'bg-green-600 text-white':'bg-zinc-700 text-white'}`}
onClick={()=>{
  setCategory("drinks")
}}
>Drinks</button>

<button className={ ` w-20 h-8 px-4 py-2 rounded-xl text-sm ${Category==="dessert" ?'bg-green-600 text-white':'bg-zinc-700 text-white'}`}
onClick={()=>{
  setCategory("dessert")
}}
>Desserts</button>



          <input type="text" 
  autoFocus
   value={search}
   onChange={(e)=>{
    setSearch(e.target.value)

   }}
    placeholder='Search Food'
       className='w-80 h-10 border border-white p-3 text-white mt-5 mr-8 '
 
   
   />
</div>
          <div className="grid grid-cols-3 gap-5 p-3">
            {filteredproducts.map((item) => (
              <Hero
                key={item.id}
                name={item.name}
               price={item.price}
                image={item.image}
                product={item}
                addtocart={addtocart}
                 search={search}
       setSearch={setSearch}
       tag={item.tag}
       tagline={item.tagline}
       rating={item.rating}
              />
            ))}
          </div>
        </div>

        <Cart cart={cart}
        cartopen={cartopen}
        setcartopen={setcartopen}
        removecart={removecart}
        clearcart={clearcart}
        />
        <Footer />
      </>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  );
}

export default App;