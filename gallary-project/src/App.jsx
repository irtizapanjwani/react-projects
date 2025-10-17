import axios from 'axios'

function App() {

  const getData = () => {
    console.log("Button is clicked")
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button onClick={getData} className="bg-green-600 px-6 py-3 rounded active:scale-95 text-white">Green</button>
    </div>
  )
}

export default App
