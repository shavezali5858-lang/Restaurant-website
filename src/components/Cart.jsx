

  import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Themeprovider } from './Themecontext';

const Cart = ({cart, cartopen, setcartopen, removecart, clearcart}) => {

  const [showaddress, setshowaddress] = useState(false)
  const [orderplaced, setorderplaced] = useState(false)
  const { darkmode } = useContext(Themeprovider)
  const [quantities, setQuantities] = useState({})

  const increase = (id) => {
    setQuantities({...quantities, [id]: (quantities[id] || 1) + 1})
  }

  const decrease = (id) => {
    if((quantities[id] || 1) > 1){
      setQuantities({...quantities, [id]: quantities[id] - 1})
    }
  }

  const total = cart.reduce((sum, item) => {
    return sum + (item.price * (quantities[item.id] || 1))
  }, 0)

  return (
    <div className={`fixed top-0 right-0 w-96 h-full shadow-xl z-50 flex flex-col transition-transform duration-300 ${cartopen ? 'translate-x-0' : 'translate-x-full'} ${darkmode ? 'bg-zinc-900' : 'bg-white'}`}>

      {/* Header */}
      <div className='flex justify-between items-center px-5 py-4 border-b border-gray-100'>
        <div>
          <h1 className={`text-xl font-bold ${darkmode ? 'text-white' : 'text-gray-900'}`}>My Cart</h1>
          <p className='text-gray-400 text-xs mt-0.5'>{cart.length} items</p>
        </div>
        <div className='flex items-center gap-2'>
          <button onClick={clearcart} className='text-xs text-red-500 bg-red-50 px-3 py-1.5 rounded-lg'>Clear all</button>
          <button onClick={() => setcartopen(false)} className='w-8 h-8 bg-gray-100 rounded-full text-gray-600 font-bold'>✕</button>
        </div>
      </div>

      {/* Items */}
      <div className='flex-1 overflow-y-auto px-4 py-3'>
        {cart.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full'>
            <p className='text-4xl mb-3'>🛒</p>
            <p className={`${darkmode ? 'text-zinc-400' : 'text-gray-400'}`}>No items added yet!</p>
          </div>
        ) : (
          cart.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 rounded-xl p-3 mb-3 ${darkmode ? 'bg-zinc-800' : 'bg-gray-50'}`}>
              <img src={item.image} className='w-14 h-14 object-contain rounded-xl bg-white p-1' alt="" />
              <div className='flex-1'>
                <p className={`font-medium text-sm ${darkmode ? 'text-white' : 'text-gray-900'}`}>{item.name}</p>
                <p className='text-green-500 text-sm'>₹{item.price}</p>
              </div>
              <div className='flex items-center gap-2'>
                <button className='w-7 h-7 bg-green-700 text-white rounded-lg' onClick={() => decrease(item.id)}>−</button>
                <span className={`font-medium text-sm w-4 text-center ${darkmode ? 'text-white' : 'text-black'}`}>{quantities[item.id] || 1}</span>
                <button className='w-7 h-7 bg-green-700 text-white rounded-lg' onClick={() => increase(item.id)}>+</button>
              </div>
              <FontAwesomeIcon icon={faTrash} className='text-red-400 text-base ml-1 cursor-pointer' onClick={() => removecart(index)} />
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className={`border-t px-4 py-4 ${darkmode ? 'border-zinc-700' : 'border-gray-100'}`}>
        <div className={`rounded-xl p-4 mb-4 ${darkmode ? 'bg-zinc-800' : 'bg-gray-50'}`}>
          <p className={`font-semibold text-sm mb-3 ${darkmode ? 'text-white' : 'text-gray-900'}`}>Order Summary</p>
          {cart.map((item, index) => (
            <div key={index} className='flex justify-between mb-1.5'>
              <span className='text-gray-400 text-xs'>{item.name} x {quantities[item.id] || 1}</span>
              <span className={`text-xs font-medium ${darkmode ? 'text-white' : 'text-gray-900'}`}>₹{item.price * (quantities[item.id] || 1)}</span>
            </div>
          ))}
          <div className='border-t border-gray-200 mt-2 pt-2 flex justify-between'>
            <span className={`font-semibold text-sm ${darkmode ? 'text-white' : 'text-gray-900'}`}>Total</span>
            <span className='font-semibold text-sm text-green-500'>₹{total}</span>
          </div>
        </div>
        <button className='w-full bg-green-700 text-white py-3 rounded-xl font-medium active:scale-95' onClick={() => setshowaddress(true)}>
          Place Order →
        </button>
      </div>

      {/* Address Popup */}
      {showaddress && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-xl p-8 w-96'>
            <h1 className='text-xl font-bold text-green-600 mb-4'>Delivery Address</h1>
            <input placeholder='Full Name' className='w-full border p-2 rounded mb-3' />
            <input placeholder='Phone Number' className='w-full border p-2 rounded mb-3' />
            <input placeholder='Address' className='w-full border p-2 rounded mb-3' />
            <input placeholder='City' className='w-full border p-2 rounded mb-3' />
            <input placeholder='Pincode' className='w-full border p-2 rounded mb-3' />
            <button className='w-full bg-green-500 text-white p-2 rounded-lg mt-2' onClick={() => { setshowaddress(false); setorderplaced(true) }}>Confirm Order</button>
            <button className='w-full text-gray-500 mt-2' onClick={() => setshowaddress(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Congratulations Popup */}
      {orderplaced && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-xl p-8 text-center'>
            <h1 className='text-4xl mb-4'>🎉</h1>
            <h2 className='text-2xl font-bold text-green-600'>Congratulations!</h2>
            <p className='text-gray-600 mt-2'>Order placed successfully!</p>
            <button className='mt-6 bg-green-500 text-white px-8 py-2 rounded-lg' onClick={() => { setorderplaced(false); setcartopen(false) }}>OK</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Cart