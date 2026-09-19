import React, { useState } from 'react'

// Dummy orders data
const dummyOrders = [
  { id: 1001, time: "10:30 AM", status: "Pending", total: 547, items: [{ name: "Burger", price: 199 }, { name: "Pizza", price: 349 }] },
  { id: 1002, time: "11:15 AM", status: "Preparing", total: 348, items: [{ name: "Noodles", price: 249 }, { name: "Fries", price: 99 }] },
  { id: 1003, time: "12:00 PM", status: "Delivered", total: 199, items: [{ name: "Burger", price: 199 }] },
  { id: 1004, time: "01:20 PM", status: "Out for Delivery", total: 448, items: [{ name: "Pasta", price: 349 }, { name: "Samosa", price: 99 }] },
]

// Dummy menu data
const dummyMenu = [
  { id: 1, name: "Burger", price: 199, category: "food" },
  { id: 2, name: "Pizza", price: 349, category: "food" },
  { id: 3, name: "Noodles", price: 249, category: "food" },
  { id: 4, name: "Mango Juice", price: 149, category: "drinks" },
  { id: 5, name: "Icecream", price: 99, category: "dessert" },
]

const Dashboard = ({ activetab, setactivetab }) => {

  const [orders, setOrders] = useState(dummyOrders)
  const [menuItems, setMenuItems] = useState(dummyMenu)

  // New item form state
  const [newItem, setNewItem] = useState({ name: "", price: "", category: "food" })
  const [editingId, setEditingId] = useState(null)
  const [editItem, setEditItem] = useState({})

  // Update order status
  const updateStatus = (id, status) => {
    const updated = orders.map(order =>
      order.id === id ? { ...order, status } : order
    )
    setOrders(updated)
  }

  // Add menu item
  const addItem = () => {
    if (!newItem.name || !newItem.price) return alert("fill the details!")
    setMenuItems([...menuItems, { ...newItem, id: Date.now(), price: Number(newItem.price) }])
    setNewItem({ name: "", price: "", category: "food" })
  }

  // Delete menu item
  const deleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id))
  }

  // Save edit
  const saveEdit = (id) => {
    setMenuItems(menuItems.map(item => item.id === id ? { ...item, ...editItem } : item))
    setEditingId(null)
  }

  const statusColors = {
    "Pending": "bg-yellow-500",
    "Preparing": "bg-blue-500",
    "Out for Delivery": "bg-orange-500",
    "Delivered": "bg-green-600",
  }

  return (
    <div className='min-h-screen bg-zinc-900'>

      {/* Header */}
      <div className='bg-zinc-800 p-4 flex justify-between items-center'>
        <h1 className='text-white text-xl font-bold'>🍕 FoodieZone Admin</h1>
        <div className='flex gap-3'>
          <button onClick={() => setactivetab("orders")} className={`px-4 py-2 rounded-lg text-sm ${activetab === "orders" ? "bg-green-600 text-white" : "bg-zinc-700 text-white"}`}>
            📦 Orders ({orders.length})
          </button>
          <button onClick={() => setactivetab("menu")} className={`px-4 py-2 rounded-lg text-sm ${activetab === "menu" ? "bg-green-600 text-white" : "bg-zinc-700 text-white"}`}>
            🍔 Menu ({menuItems.length})
          </button>
        </div>
      </div>

      <div className='p-6'>

        {/* Orders Tab */}
        {activetab === "orders" && (
          <div>
            <h2 className='text-white text-lg font-semibold mb-4'>All Orders</h2>
            {orders.map(order => (
              <div key={order.id} className='bg-zinc-800 rounded-xl p-4 mb-4'>
                <div className='flex justify-between items-center mb-3'>
                  <div>
                    <p className='text-white font-semibold'>Order #{order.id}</p>
                    <p className='text-zinc-400 text-xs mt-0.5'>{order.time}</p>
                  </div>
                  <span className={`text-white text-xs px-3 py-1 rounded-full ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </div>
                {order.items.map((item, i) => (
                  <p key={i} className='text-zinc-300 text-sm mb-1'>• {item.name} — ₹{item.price}</p>
                ))}
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-green-400 font-semibold'>Total: ₹{order.total}</p>
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className='bg-zinc-700 text-white px-3 py-1 rounded-lg text-sm'
                  >
                    <option>Pending</option>
                    <option>Preparing</option>
                    <option>Out for Delivery</option>
                    <option>Delivered</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Menu Tab */}
        {activetab === "menu" && (
          <div>
            <h2 className='text-white text-lg font-semibold mb-4'>Menu Management</h2>

            {/* Add Item Form */}
            <div className='bg-zinc-800 rounded-xl p-4 mb-6'>
              <h3 className='text-white font-semibold mb-3'>Add New Item</h3>
              <div className='flex gap-3 flex-wrap'>
                <input
                  placeholder='Item name'
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className='bg-zinc-700 text-white p-2 rounded-lg text-sm flex-1'
                />
                <input
                  placeholder='Price'
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                  className='bg-zinc-700 text-white p-2 rounded-lg text-sm w-28'
                />
                <select
                  value={newItem.category}
                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  className='bg-zinc-700 text-white p-2 rounded-lg text-sm'
                >
                  <option value="food">Food</option>
                  <option value="drinks">Drinks</option>
                  <option value="dessert">Dessert</option>
                </select>
                <button onClick={addItem} className='bg-green-600 text-white px-4 py-2 rounded-lg text-sm'>
                  + Add
                </button>
              </div>
            </div>

            {/* Menu Items List */}
            <div className='grid grid-cols-1 gap-3'>
              {menuItems.map(item => (
                <div key={item.id} className='bg-zinc-800 rounded-xl p-4 flex justify-between items-center'>
                  {editingId === item.id ? (
                    // Edit mode
                    <div className='flex gap-3 flex-1 flex-wrap'>
                      <input
                        defaultValue={item.name}
                        onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                        className='bg-zinc-700 text-white p-2 rounded-lg text-sm flex-1'
                      />
                      <input
                        defaultValue={item.price}
                        onChange={(e) => setEditItem({ ...editItem, price: Number(e.target.value) })}
                        className='bg-zinc-700 text-white p-2 rounded-lg text-sm w-24'
                      />
                      <select
                        defaultValue={item.category}
                        onChange={(e) => setEditItem({ ...editItem, category: e.target.value })}
                        className='bg-zinc-700 text-white p-2 rounded-lg text-sm'
                      >
                        <option value="food">Food</option>
                        <option value="drinks">Drinks</option>
                        <option value="dessert">Dessert</option>
                      </select>
                      <button onClick={() => saveEdit(item.id)} className='bg-green-600 text-white px-3 py-1 rounded-lg text-sm'>Save</button>
                      <button onClick={() => setEditingId(null)} className='bg-zinc-600 text-white px-3 py-1 rounded-lg text-sm'>Cancel</button>
                    </div>
                  ) : (
                    // View mode
                    <>
                      <div>
                        <p className='text-white font-medium'>{item.name}</p>
                        <p className='text-zinc-400 text-xs mt-0.5'>₹{item.price} • {item.category}</p>
                      </div>
                      <div className='flex gap-2'>
                        <button onClick={() => { setEditingId(item.id); setEditItem({}) }} className='bg-blue-600 text-white px-3 py-1 rounded-lg text-sm'>Edit</button>
                        <button onClick={() => deleteItem(item.id)} className='bg-red-600 text-white px-3 py-1 rounded-lg text-sm'>Delete</button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

const LoginForm = ({ setisloggedin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    if (email === "admin@foodiezone.com" && password === "admin123") {
      setisloggedin(true)
    } else {
      alert("Wrong credentials!")
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-zinc-900'>
      <div className='bg-zinc-800 p-8 rounded-xl w-96'>
        <h1 className='text-white text-2xl font-bold mb-2'>Admin Login 🔐</h1>
        <p className='text-zinc-400 text-sm mb-6'>FoodieZone Dashboard</p>
        <input placeholder='Email' className='w-full p-3 rounded-lg mb-3 bg-zinc-700 text-white' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' className='w-full p-3 rounded-lg mb-6 bg-zinc-700 text-white' onChange={(e) => setPassword(e.target.value)} />
        <button className='w-full bg-green-600 text-white p-3 rounded-lg font-medium' onClick={login}>Login</button>
        <p className='text-zinc-500 text-xs text-center mt-4'>admin@foodiezone.com / admin123</p>
      </div>
    </div>
  )
}

const Admin = () => {
  const [isloggedin, setisloggedin] = useState(false)
  const [activetab, setactivetab] = useState("orders")

  return (
    <div>
      {isloggedin
        ? <Dashboard activetab={activetab} setactivetab={setactivetab} />
        : <LoginForm setisloggedin={setisloggedin} />
      }
    </div>
  )
}

export default Admin



























// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'




//   const Dashboard = ({ activetab, setactivetab }) => {
//   return (
//     <div className='min-h-screen bg-zinc-900'>
      
//       {/* Header */}
//       <div className='bg-zinc-800 p-4 flex justify-between items-center'>
//         <h1 className='text-white text-xl font-bold'>🍕 Admin Dashboard</h1>
//         <div className='flex gap-3'>
//           <button 
//             onClick={() => setactivetab("orders")}
//             className={`px-4 py-2 rounded-lg text-sm ${activetab === "orders" ? "bg-green-600 text-white" : "bg-zinc-700 text-white"}`}
//           >
//             Orders
//           </button>
//           <button 
//             onClick={() => setactivetab("menu")}
//             className={`px-4 py-2 rounded-lg text-sm ${activetab === "menu" ? "bg-green-600 text-white" : "bg-zinc-700 text-white"}`}
//           >
//             Menu
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className='p-6'>
//         {activetab === "orders" && <h1 className='text-white'>Orders Tab</h1>}
//         {activetab === "menu" && <h1 className='text-white'>Menu Tab</h1>}
//       </div>

//     </div>
//   )
// }
// const LoginForm = ({ setisloggedin }) => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")


//   const login = () => {
//     if(email === "admin@foodiezone.com" && password === "admin123") {
//       setisloggedin(true)
//     } else {
//       alert("Wrong credentials!")
//     }
//   }

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-zinc-900'>
//       <div className='bg-zinc-800 p-8 rounded-xl w-96'>
//         <h1 className='text-white text-2xl font-bold mb-6'>Admin Login</h1>
//         <input 
//           placeholder='Email' 
//           className='w-full p-3 rounded-lg mb-3 bg-zinc-700 text-white'
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input 
//           type='password'
//           placeholder='Password' 
//           className='w-full p-3 rounded-lg mb-6 bg-zinc-700 text-white'
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button 
//           className='w-full bg-green-600 text-white p-3 rounded-lg'
//           onClick={login}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   )
// }


// const Admin = () => {
    
// const [isloggedin, setisloggedin] = useState(false)
// const [activetab, setactivetab] = useState("orders")

//   return (
//   <div>
   
      
//       {isloggedin ? <Dashboard  activetab={activetab} setactivetab={setactivetab}/> : <LoginForm setisloggedin={setisloggedin} />}

  
//     </div>
//   )
// }

// export default Admin
