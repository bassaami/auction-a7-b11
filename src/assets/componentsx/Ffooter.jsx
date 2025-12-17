import React from 'react';

const Ffooter = () => {
    return (
        <div className='pt-3 ' >

<div className="btn flex flex-col btn-ghost ">
                   <div className="text-blue-300 text-2xl">Auction<span className='text-amber-400'>Gallery</span></div> 
<div className="mt-0 text-xs text-amber-50"> 
              Bid.     <span> Win.       </span>         Own.         </div>
{/* CENTER SECTION: Navigation Links */}
<div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><a>About Us</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>How It Works</a></li>
                    <li><a>Terms & Conditions</a></li>
                </ul>
            </div>           
       <div className="text-xs pb-4  text-gray-500">© 2025 AuctionHub. All rights reserved.</div>
                </div>

        
        </div>
    );
};

export default Ffooter;