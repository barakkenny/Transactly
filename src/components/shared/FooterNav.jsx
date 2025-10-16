import { useState } from "react";
import { House, Ellipsis } from "lucide-react";
import { MdTableBar, MdOutlineReorder } from "react-icons/md";
import { BiSolidDish } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";


const FooterNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="text-[#ababab] fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button onClick={()=> navigate('/')} className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]"><House className="inline mr-2" size={20} /> <p>Home</p></button>
      <button onClick={()=> navigate('/orders')} className="flex items-center justify-center text-[#ababab] w-[200px]"><MdOutlineReorder className="inline mr-2" size={20} /> <p>Orders</p></button>
      <button onClick={()=> navigate('/tables')} className="flex items-center justify-center text-[#ababab] w-[200px]"><MdTableBar className="inline mr-2" size={20} /> <p>Tables</p></button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px] "><Ellipsis className="inline mr-2" size={20} /> <p>More</p></button>
    
      <button onClick={openModal} className=" absolute bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center bottom-6">
        <BiSolidDish size={30}/>
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium" htmlFor="customer name">Customer Name</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input className="bg-transparent flex-1 text-white focus:outline-none" type="text" name="" placeholder="Enter customer name" id="" />
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default FooterNav
