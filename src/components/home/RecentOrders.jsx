import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import OrderList from './OrderList'

const RecentOrders = () => {
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Recent Orders</h1>
            <Link href="" className='text-[#025cca] text-sm font-semibold'>View all</Link>
        </div>

        <div className="flex items-center gap-4 text-[#f5f5f5] bg-[#1f1f1f] rounded-[15px] px-6 py-4 w-[500px] mx-6">
            <Search className="" />
            <input 
            type="text"
            placeholder="Search recent orders"
            className="outline-none w-full"
            />
        </div>

        <div className="mt-4 px-6 overflow-y-scroll h-[300px] scollbar-hide">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>

      </div>
    </div>
  )
}

export default RecentOrders
