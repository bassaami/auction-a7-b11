import { useState } from 'react'

import './App.css'
import Table from './assets/componentsx/Table'

function App() {
  
  return (
    <>
    <h1 className=' text-4xl mx-15 mt-9' >bismillah</h1>
    <h5 className='mx-15 ' >Discover & Bid on Extraordinary items</h5>
    <div className="flex m-15 main-part">

<div className="tablex w-[70%]">
  <Table></Table>
  </div>
<div className="notifix border rounded-2xl mx-5 text-center bg-gray-700 w-[30%]">
        <h2 className='font-bold bg-gray-950 my-3 '>Favorite Items</h2>
  <div className="text-center border-dashed  bg-gray-950 my-5 ">
<h2 className='font-bold my-3  '>No Favorites yet</h2>
<p className='text-center'> Check on any item to add it to your Favorites </p>
  </div>

</div>
    </div>
     
    </>
  )
}

export default App
