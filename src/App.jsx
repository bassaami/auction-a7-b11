import { useState } from 'react'

import './App.css'
import Table from './assets/componentsx/Table'

function App() {
  
  return (
    <>
    <h1 className=' m-10' >bismillah</h1>
    <div className="flex m-15 main-part">

<div className="tablex w-[70%]">
  <Table></Table>
  </div>
<div className="notifix text-center w-[30%]">
<h2>Favorite Items</h2>
</div>
    </div>
     
    </>
  )
}

export default App
