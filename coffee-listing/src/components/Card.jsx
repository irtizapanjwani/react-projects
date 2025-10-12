/* import React from "react";

export default function Card({ coffee }) {
  return (
    <div
      className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md 
                 transform hover:scale-105 transition duration-300 
                 hover:shadow-lg hover:shadow-purple-700/30 
                 opacity-0 animate-fadeIn"
    >
      <div className="relative">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-48 object-cover"
        />
        {coffee.popular && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            Popular
          </span>
        )}
        {!coffee.available && (
          <span className="absolute top-2 right-2 bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded">
            Sold Out
          </span>
        )}
      </div>

      <div className="p-4 text-white">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{coffee.name}</h3>
          <span className="bg-green-700 text-sm px-2 py-1 rounded">
            ${coffee.price}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
          <span>⭐ {coffee.rating}</span>
          {coffee.votes && <span>({coffee.votes} votes)</span>}
        </div>
      </div>
    </div>
  );
}
 */

/* import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-green-400 rounded-lg w-[350px] border-2 border-purple-500 p-6'>
        <img className='rounded-full h-[200px] w-[200px] block mx-auto' src={props.img}/>
        <h1 className='text-3xl text-gray-800 text-center font-bold mb-2'>{props.user} , {props.age}</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className='bg-black text-white p-2 border rounded-xl block mx-auto mt-2 cursor-pointer hover:bg-blue-950 transition-transform ease-in-out'>View Profile</button>
    </div>
  )
}

export default Card */

import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (
        <div id='card'>
            <div id="top" className='bg-white rounded-xl w-[300px] p-2 shadow-lg'>
                <div className='bg-sky-50 h-[200px]'>
                    <div className=' flex justify-between items-center mb-2 p-2'>
                        <p>{props.price}</p>
                        <button className='cursor-pointer'><Bookmark size={25} /></button>
                    </div>
                    <p className='text-2xl font-bold ml-2'>{props.company} <span className='text-sm font-normal'>{props.posted}</span></p>
                    <h1 className='text-2xl font-bold text-gray-800 ml-2'>{props.title}</h1>
                    <p className='ml-2 mt-2 bg-gray-300 font-semibold text-base inline-block'>{props.type}</p>
                </div>
                <hr className="border-t-2 border-gray-300 my-1" />
                <div className="flex justify-between items-start p-1.5">
                    {/* Left: logo and location */}
                    <div className="flex flex-col items-start">
                        <img
                            className="rounded-full h-12 w-12 object-cover object-center"
                            src={props.logo}
                            alt="Airbnb"
                        />
                        <p className="font-bold text-sm mt-1">{props.location}</p>
                    </div>

                    {/* Right: View button */}
                    <button className="w-[70px] h-[40px] mt-3 bg-black text-white border rounded-full cursor-pointer">
                        View
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Card