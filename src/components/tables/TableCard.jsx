import { useNavigate } from 'react-router-dom';
import { getBgColor } from '../../utils'
import { useDispatch } from 'react-redux';
import {updateTable } from '../../redux/slices/customerSlice'

const TableCard = ({name, status, initials, seats}) => {
const dispatch = useDispatch()
const navigate = useNavigate();


const handleClick = (name) => {
  dispatch(updateTable({tableNo: name}))
  if(status === "Booked") return;
  navigate(`/menu`)
}

  return (
    <div onClick={() => handleClick(name)} className='w-[300px] hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg cursor-pointer'>
      <div className="flex items-center justify-between px-1">
        <h1 className="text-xl font-semibold text-[#f5f5f5]">{name}</h1>
        <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "text-[#f6b100] text-white"}text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg`}>{status}</p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-9">
      <h1 className={`text-white rounded-full p-5 text-xl`} style={{backgroundColor: getBgColor()}}>{initials}</h1>
      </div>
      <p className='text-[#ababab] text-xs'>Seats: <span className="text-[#f5f5f5]">{seats}</span></p>
    </div>
  )
}

export default TableCard
