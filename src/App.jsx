import { useState } from 'react'
import './App.css'
import Table from './assets/componentsx/Table'
// 1. Import Toastify components and CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbarr from './assets/componentsx/Navbarr';
import Bannerr from './assets/componentsx/Bannerr';
import Ffooter from './assets/componentsx/Ffooter';

function App() {
  const [bkmark, setBookmr] = useState([])

  // REMOVED: const [showAlert, setShowAlert] = useState(false) 
  // You don't need manual state anymore!

  const handleBookmk = (itrow) => {
    const isAlreadyAdded = bkmark.some((item) => item.id === itrow.id);
    
    if (!isAlreadyAdded) {
      setBookmr([...bkmark, itrow]);
      
      // 2. Trigger the Toastify alert
      toast.success('Item added to favorites!', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } else {
      // Bonus: Add a warning if they try to add it again
      toast.warn('This item is already in favorites!');
    }
  }

  const handleRemove = (id) => {
    const updatedBookmarks = bkmark.filter((item) => item.id !== id);
    setBookmr(updatedBookmarks);
    toast.info('Item removed.');
  }

  const totalPrice = bkmark.reduce((acc, item) => acc + item.currentBidPrice, 0);

  return (
    <>
      {/* 3. Place the ToastContainer at the top level */}
      <ToastContainer />
      <Navbarr></Navbarr>
      <Bannerr></Bannerr>

      <h1 className='text-4xl mx-15 mt-9'>Auction Gallery</h1>
      <h5 className='mx-15'>Discover & Bid on Extraordinary items</h5>
      
      <div className="flex m-15 main-part">
        <div className="tablex w-[70%]">
          {/* Note: showAlert prop is no longer needed here */}
          <Table bkmark={bkmark} handleBookmk={handleBookmk} />
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
                  <p className="text-sm text-gray-400">${mark.currentBidPrice}</p>
                  <br /> 
                  <button 
                    onClick={() => handleRemove(mark.id)} 
                    className="btn-xs btn btn-dash btn-error">
                    X 
                  </button> 
                </div> 
            ))}
          </div>

          <div className="border-t border-gray-500 p-4 bg-gray-800 rounded-b-2xl">
            <h3 className="text-xl font-bold text-white">
              Total: ${totalPrice}
            </h3>
          </div>
        </div>
        
      </div>
      <Ffooter></Ffooter>
    </>
  )
}

export default App