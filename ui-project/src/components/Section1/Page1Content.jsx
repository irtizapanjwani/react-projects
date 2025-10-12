import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-8 flex items-center gap-8 px-18 h-[90vh] bg-amber-600'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content