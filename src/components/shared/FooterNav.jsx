import { House, Ellipsis } from "lucide-react";
import { MdTableBar, MdOutlineReorder } from "react-icons/md";
import { BiSolidDish } from 'react-icons/bi';

const FooterNav = () => {
  return (
    <div className="text-[#ababab] fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]"><House className="inline mr-2" size={20} /> <p>Home</p></button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]"><MdOutlineReorder className="inline mr-2" size={20} /> <p>Orders</p></button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]"><MdTableBar className="inline mr-2" size={20} /> <p>Tables</p></button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]"><Ellipsis className="inline mr-2" size={20} /> <p>More</p></button>
    
      <button className=" absolute bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center bottom-6">
        <BiSolidDish size={30}/>
        </button>
    </div>
  )
}

export default FooterNav
