import React from 'react'
import { Searchinfor } from '../../components'
import icons from '../../ultils/icons'

const { BsChevronRight, HiOutlineLocationMarker, TbReportMoney, RiCrop2Line, MdOutlineHouseSiding, FiSearch } = icons

const Search = () => {
  return (
    <div className='p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2'>
      <Searchinfor IconBefore={<MdOutlineHouseSiding />} fontWeight IconAfter={<BsChevronRight color='rgb(156, 163, 175)' />} text='Phòng trọ, nhà trọ' />
      <Searchinfor IconBefore={<HiOutlineLocationMarker />} IconAfter={<BsChevronRight color='rgb(156, 163, 175)' />} text='Toàn quốc' />
      <Searchinfor IconBefore={<TbReportMoney />} IconAfter={<BsChevronRight color='rgb(156, 163, 175)' />} text='Chọn giá' />
      <Searchinfor IconBefore={<RiCrop2Line />} IconAfter={<BsChevronRight color='rgb(156, 163, 175)' />} text='Chọn diện tích' />
      <button
      type='button'
      className='outline-none py-2 px-4 w-full bg-secondary1 text-[13.3px] flex items-center justify-center gap-2 text-white font-medium'
      >
        <FiSearch/>
        Tìm kiếm
      </button>
    </div>
  )
}

export default Search