import React from 'react'
import { MoveRight } from 'lucide-react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-start'>
            <h2 className='text-xl font-semibold bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.id + 1}</h2>
            <p className='text-shadow-2xs text-xl leading-relaxed text-white mt-auto mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, modi nesciunt tempora a molestiae asperiores!</p>

            <div className='flex items-center justify-between'>
                <button style={{backgroundColor:props.color}} className='bg-blue-500 text-white font-medium px-7 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-500 font-medium px-2 py-2 rounded-full'><MoveRight className='animate-move-right' /></button>
            </div>
        </div>
    )
}

export default RightCardContent