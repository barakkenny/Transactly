import { Search, Bell, CircleUserRound } from 'lucide-react'
import { FaBell, FaUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
 <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">

    <div className='flex items-center gap-2'>
        <img src={null} alt="transactly logo" />
        <h1 className='text-lg font-semibold text-[#f5f5f5]'>Transactly</h1>
    </div>

    <div className="flex items-center gap-2 rounded-[15px] text-[#f5f5f5] bg-[#1f1f1f] px-5 py-2 w-[500px]">
        <Search className="" />
        <input 
            type="text"
            placeholder="Search"
            className="outline-none "
            />
    </div>

    <div className='flex items-center gap-4 text-[#f5f5f5]'>
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
            <FaBell className="text-4xl" />
        </div>
            <div className='flex items-center gap-3 cursor-pointer'>
                <FaUserCircle className="text-4xl"/>
                <div className="flex flex-col items-start">
                    <h1 className="text-md font-semibold">Ken Dam</h1>
                    <p className='text-xs text-[#ababab] font-medium'>Admin</p>
                </div>  
            </div>
    </div>

 </header>
  )
}

export default Header
