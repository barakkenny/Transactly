import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import OrderList from './OrderList'

const RecentOrders = () => {
  return (
    <div className="px-8 mt-6 pb-2">
      <div className="bg-[#1a1a1a] w-full h-[360px] rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Recent Orders</h1>
            <Link to="/product" className='text-[#025cca] text-sm font-semibold'>View all</Link>
        </div>

        <div className="flex items-center gap-4 text-[#f5f5f5] bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6">
            <Search className="" />
            <input 
            type="text"
            placeholder="Search recent orders"
            className="outline-none"
            />
        </div>

        <div className="overflow-y-scroll mt-4 px-6 h-[300px] scrollbar-hide">
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
