import React, { useEffect, useState } from 'react';
import Irow from './Irow';

const Table = () => {

const [table, setTable] = useState([])

  useEffect(() => {
    fetch("biditem.json")
    .then(resp => resp.json())
.then(data => setTable(data))
  }, [])

console.log(table)

    return (
        <div>
  <div className="overflow-x-auto">
  <table className="table border rounded-2xl">
    {/* head */}
    <thead>
      <tr>
        
        <th>Items {table.length} </th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
      </tr>
      
      {
        table.map((item) => <Irow itrow={item} key={item.id} ></Irow>)
      }
      {/* <Irow></Irow>
      <Irow></Irow> */}
      
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
    );
};

export default Table;