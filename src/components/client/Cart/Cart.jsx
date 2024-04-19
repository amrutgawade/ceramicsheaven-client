import React from 'react'
import CartItem from './CartItem'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = ()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div className='pt-20 m-3 relative'>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
          {[1, 1, 1, 1, 1].map((item) => <CartItem />)}
        </div>
        <div className='px-5 sticky top-16 h-[calc(100vh-4rem)] mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
            <hr/>
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>-₹3419</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery charge</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-3 text-black font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹1278 </span>
              </div>
            </div>
            <Button onClick={handleCheckout} className='w-full' variant='contained' sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
