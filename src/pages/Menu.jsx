import FooterNav from "../components/shared/FooterNav"
import BackButton from "../components/shared/BackButton"
import { MdRestaurantMenu } from "react-icons/md"
import MenuContainer from "../components/menu/MenuContainer"
import CustomerInfo from "../components/menu/CustomerInfo"
import CartInfo from "../components/menu/CartInfo"
import Bill from "../components/menu/Bill"

const Menu = () => {


  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5px)] overflow-hidden flex gap-3">
        
    <div className='flex-[3]'>
            <div className='flex items-center justify-between px-10 py-4 mt-2'>
        <div class="flex items-center gap-4">
          <BackButton />
        <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Menu</h1>
        </div>
      <div className='flex items-center justify-around gap-4 text-[#f5f5f5]'>
        <div className='flex items-center gap-3 cursor-pointer'>
           <MdRestaurantMenu className="text-4xl"/>
             <div className="flex flex-col items-start">
               <h1 className="text-md font-semibold">Customer Name</h1>
                 <p className='text-xs text-[#ababab] font-medium'>Table No: 2</p>
                </div>  
        </div>
        {/* <button>All</button> */}
      </div>
      </div>

      <MenuContainer />
    </div>

      <div className='flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2'>
        
          <CustomerInfo />
          <hr className="border-[#2a2a2a] border-t-2" />

          <CartInfo />

          <Bill />
      </div>


      <FooterNav />
    </section>
  )
}

export default Menu
