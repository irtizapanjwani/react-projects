import React from 'react'

import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-72 shrink-0 overflow-hidden relative bg-red-400 rounded-4xl'>
        <img src={props.img} 
        alt="hello" 
        className='w-full h-full object-cover'
        />
        <RightCardContent tag={props.tag} id={props.id} color={props.color}/>
       
    </div>
  )
}

export default RightCard