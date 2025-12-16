import { useState } from 'react'
import './App.css'
import Table from './assets/componentsx/Table'

function App() {
  const [bkmark, setBookmr] = useState([])

  // Existing add function
  const handleBookmk = (itrow) => {
    setBookmr([...bkmark, itrow])
  }

  // NEW: Remove function
  const handleRemove = (id) => {
    // Filter keeps items that DO NOT match the ID we want to remove
    const updatedBookmarks = bkmark.filter((item) => item.id !== id);
    setBookmr(updatedBookmarks);
  }

  return (
    <>
      <h1 className='text-4xl mx-15 mt-9'>bismillah</h1>
      <h5 className='mx-15'>Discover & Bid on Extraordinary items</h5>
      
      <div className="flex m-15 main-part">
        <div className="tablex w-[70%]">
          <Table handleBookmk={handleBookmk}></Table>
        </div>

        <div className="notifix border rounded-2xl mx-5 text-center bg-gray-700 w-[30%]">
          <h2 className='font-bold bg-gray-950 py-3'>Favorite Items</h2>
          
          <div className="text-center bg-gray-950 my-7">
            
            {/* Conditional Rendering: Only show "No Favorites" if list is empty */}
            {bkmark.length === 0 && (
              <>
                <h2 className='font-bold my-3'>No Favorites yet</h2>
                <p className='text-center'> Check on any item to add it to your Favorites </p>
              </>
            )}

            {/* The List of Favorites */}
            {bkmark.map((mark) => (
              <div key={mark.id} className="my-1 rounded-2xl border py-3 bg-gray-950">
                <h3 className='font-bold'>{mark.title}</h3>
                <br />
                {/* BUTTON WITH REMOVE FUNCTIONALITY */}
                <button 
                  onClick={() => handleRemove(mark.id)} 
                  className="btn-xs btn btn-dash btn-error"
                >
                  X
                </button>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App