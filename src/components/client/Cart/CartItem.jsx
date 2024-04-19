import React from 'react'
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[7rem] h-[7rem]'>
                    <img className='w-full h-full object-cover object-top' src='https://images.orientbell.com/media/catalog/product/s/u/super_gloss_jeriba_quartzite_blue_f1.jpg' alt='' />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Sample Product5</p>
                    <p className='opacity-70'>Size: 100 x 200</p>
                    <p className='opacity-70 mt-2'>Brand: Kajaria</p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-2'>
                        <p className='font-semibold'> ₹199</p>
                        <p className='opacity-50 line-through'>₹211</p>
                        <p className='text-green-600 font-semibold'>5% off</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='px-7 py-1 border rounded-sm'>3</span>
                    <IconButton sx={{color:"RGB(245 85 253)"}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div>
                    <Button sx={{color:"RGB(245 85 253)"}}>Remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
