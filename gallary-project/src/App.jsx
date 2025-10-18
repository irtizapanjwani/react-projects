import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(response.data);
  }

  useEffect(function(){
    getData();
  },[index])

  let PrintUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>"Loading...."</h3> 

  if (userData.length > 0) {
    PrintUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
        <div className='h-40 w-44 overflow-hidden rounded'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt='' />
        </div>
        <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto p-4 py-2 text-white'>
     {/*  <button onClick={getData} className="bg-green-600 px-6 py-3 rounded active:scale-95 text-white">
        Get Data
      </button> */}
      <h2 className='fixed bg-red-500 text-6xl'>{index}</h2>
      <div className='flex flex-wrap gap-4'>
        {PrintUserData}
      </div>
      <div className='flex justify-center items-center gap-4 p-4'>
        <button 
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUserData([])
              }
            }} 
          className='bg-amber-400 text-black rounded px-2 py-2 cursor-pointer active:scale-95'>Previos</button>
        <button 
          onClick={()=>{
            setUserData([])
            setIndex(index+1)
          }} 
          className='bg-amber-400 text-black rounded px-2 py-2 cursor-pointer active:scale-95'>Next</button>
      </div> 
    </div>

  )
}

export default App


