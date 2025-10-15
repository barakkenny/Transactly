import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderCard = () => {
  return (
        <div className="w-[400px] bg-[#262626] p-4 rounded-lg mb-4 mx-8">
            <div className="flex items-center gap-5">
            <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">KD</button>
            <div className="flex items-center justify-between w-[40%]">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Ken Dam</h1>
                    <p className="text-[#ababab] text-sm">#101/ Dine in</p>
                </div>
                </div>
    
                <div className='flex flex-col items-end gap-2'>
                    <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
                    <span><FaCheckDouble className="inline mr-2" /></span>    
                    Ready</p>
                    <p className="text-[#ababab] text-sm">
                        <span><FaCircle className="inline mr-2 text-green-600" /></span>
                        Ready to serve</p>
                </div>
            </div>
            <div className='flex justify-between items-center mt-4 text-[#ababab]'>
                <p>October 15, 2025 2:42 PM</p>
                <p>8 Items</p>
            </div>
            <hr  className='w-full mt-4 border-t-1 border-gray-500' />

            <div className='flex items-center justify-between mt-4 text-[#f5f5f5]'>
                <h1>Total</h1>
                <p className='text-lg font-semibold'>$250.00</p>
            </div>
        </div>
  )
}

export default OrderCard
