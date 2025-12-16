import { useState } from 'react'
import './App.css'
import Table from './assets/componentsx/Table'

function App() {
  const [bkmark, setBookmr] = useState([])

  // 1. Add state for the toast/alert
  const [showAlert, setShowAlert] = useState(false)

  const handleBookmk = (itrow) => {
    const isAlreadyAdded = bkmark.some((item) => item.id === itrow.id);
    if (!isAlreadyAdded) {
      setBookmr([...bkmark, itrow]);
      // 2. Show the alert and set a timer to hide it
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Hides after 3 seconds
    }  
  }

  const handleRemove = (id) => {
    const updatedBookmarks = bkmark.filter((item) => item.id !== id);
    setBookmr(updatedBookmarks);
  }

  // NEW: Calculate Total Price
  // We use 0 as the starting value. 'acc' accumulates the sum.
  const totalPrice = bkmark.reduce((acc, item) => acc + item.currentBidPrice, 0);

  // const isChecked = bkmark.some(item => item.id === item.id);

  return (
    <>
    {/* PASTE IT HERE */}
      {showAlert && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-warning">
            <span>Item added in favorites!</span>
          </div>
        </div>
      )}

      <h1 className='text-4xl mx-15 mt-9'>Auction Gallery</h1>
      <h5 className='mx-15'>Discover & Bid on Extraordinary items</h5>
      
      <div className="flex m-15 main-part">
        <div className="tablex w-[70%]">
          <Table bkmark={bkmark}  showAlert={showAlert} handleBookmk={handleBookmk} ></Table>
        </div>

        <div className="notifix border rounded-2xl mx-5 text-center bg-gray-700 w-[30%] flex flex-col">
          <h2 className='font-bold bg-gray-950 py-3'>Favorite Items</h2>
          
          <div className="text-center bg-gray-950 my-7 flex-grow">
            {bkmark.length === 0 && (
               <div className='p-4'>
                 <h2 className='font-bold my-3'>No Favorites yet</h2>
                 <p className='text-center'> Check on any item to add it to your Favorites </p>
               </div>
            )}

            {bkmark.map((mark) => (
                <div key={mark.id} className="my-1 rounded-2xl border py-3 bg-gray-950 "> 
                  <h3 className='font-bold'>{mark.title}</h3> 
                  <p className="text-sm text-gray-400">${mark.currentBidPrice}</p> {/* Display item price */}
                  <br /> 
                  <button 
                    onClick={() => handleRemove(mark.id)} 
                    className="btn-xs btn btn-dash btn-error">
                    X 
                  </button> 
                </div> 
            ))}
          </div>

          {/* NEW: Total Price Section */}
          <div className="border-t border-gray-500 p-4 bg-gray-800 rounded-b-2xl">
            <h3 className="text-xl font-bold text-white">
              Total: ${totalPrice}
            </h3>
          </div>

        </div>
      </div>
    </>
  )
}

export default App