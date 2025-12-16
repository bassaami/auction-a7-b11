import React from 'react';

const Irow = () => {
    return (
        
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
              
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          
        </td>
        <td>2d 4h 30m</td>
  <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>      
      </tr>
        
    );
};

export default Irow;