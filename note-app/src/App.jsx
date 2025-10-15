import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const FormHandler = (e) => {
    e.preventDefault();
    const taskCopy = [...task]
    taskCopy.push({title,details})
    setTask(taskCopy)

    setTitle('');
    setDetails('')
  }
  return (
    <div className='h-screen lg:flex bg-black text-white p-7'>
      <form onSubmit={FormHandler} className='flex flex-col gap-4 lg:w-1/2 items-start p-4'>
      <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-15 py-5 w-full font-medium outline-none rounded border-2'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <textarea
          type="text"
          placeholder='Enter Details'
          className='w-full h-40 border-2 font-medium rounded outline-none px-15 py-5 text-left'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className='bg-white text-black active:bg-gray-400 w-full font-medium rounded border cursor-pointer px-5 py-3'>Add Note</button>
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto justify-start'>
         {task.map(function(elem,idx){

          return  <div key={idx} className="relative h-52 w-40 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black p-4">
            <h3 className='leading-tight text-xl font-bold'>Title: {elem.title}</h3>
            <p className='mt-2 leading-tight text-gray-800'>Details: {elem.details}</p>
          </div>
         })}
         
          
        </div>
      </div>
    </div>
  )
}

export default App