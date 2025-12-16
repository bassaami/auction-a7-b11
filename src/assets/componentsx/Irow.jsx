import React from 'react';

const Irow = ({itrow,  handleBookmk}) => {
console.log(handleBookmk)
    return (
        
<tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={itrow.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{itrow.title} </div>
              
            </div>
          </div>
        </td>
        <td>
      {itrow.currentBidPrice}
        </td>
        <td>{itrow.timeLeft}</td>
  <th>
          <label>
            {/* <button onClick={()=> handleBookmk(itrow) } className="checkbox" ></button> */}
            <input  onChange={()=> handleBookmk(itrow) }  type="checkbox" className="checkbox" />
          </label>
        </th>      
      </tr>
        
    );
};

export default Irow;