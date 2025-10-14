import React from 'react'

const App = () => {
  const FormHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted')
  }
  return (
    <div className='h-screen lg:flex bg-black text-white p-7'>
      <form onSubmit={FormHandler} className='flex flex-col gap-4 lg:w-1/2 items-start p-4'>
      <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-15 py-5 w-full font-medium outline-none rounded border-2'
        />
        <textarea
          type="text"
          placeholder='Enter Details'
          className='w-full h-40 border-2 font-medium rounded outline-none px-15 py-5 text-left'
        />
        <button className='bg-white text-black w-full font-medium rounded border cursor-pointer px-5 py-3'>Add Note</button>
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          
        </div>
      </div>
    </div>
  )
}

export default App