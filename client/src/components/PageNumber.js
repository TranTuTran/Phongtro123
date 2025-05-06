import React, { memo } from 'react'

const PageNumber = ({ number }) => {
    return (
        <div className='px-[18px] p-[15px] bg-white hover:bg-[#E13427] hover:text-white rounded-md'>
    {number}
    </div>
  )
}

export default memo(PageNumber)
