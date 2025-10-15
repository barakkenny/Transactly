import { Link } from 'react-router-dom'
import { popularDishes } from '../../constants/index'

const PopularDishes = () => {
  return (
    <div className='mt-6 pr-6'>
      <div className="bg-[#1a1a1a] w-full rounded-lg">
        <div className="flex items-center justify-between px-6 py-4">
            <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Popular Dishes</h1>
            <Link className='text-[#025cca] text-sm font-semibold'>View all</Link>
        </div>

    <div className="overflow-y-scroll h-[670px] scrollbar-hide">
        {popularDishes.map((dish) => (
            <div key={dish.id} className="flex items-center mt-4 gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6 text-[#f5f5f5]">
                <h1 className="text-[#f5f5f5] font-bold text-xl mr-5">{dish.id < 10 ? `0${dish.id}`: dish.id}</h1>
                <img src={dish.image} alt={dish.name} className="w-[50px] h-[50px] rounded-full" />
                <div>
                    <h1 className="font-semibold tracking-wide">{dish.name}</h1>
                    <p className="text-sm font-semibold mt-1">
                        <span className='text-[#ababab]'>orders: </span>
                        {dish.numberOfOrders}</p>
                </div>
            </div>
        ))}
    </div>

      </div>
    </div>
  )
}

export default PopularDishes
