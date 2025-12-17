import React from 'react';

const Bannerr = () => {
    return (
        <div className="px-10 my-8">
            {/* 1. Reverted to 'card image-full' structure for text overlay */}
            {/* Added 'w-full' and height 'h-[450px]' for banner shape */}
            <div className="card bg-base-100 image-full w-full h-[450px] shadow-xl overflow-hidden">
                
                <figure>
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/074/597/562/small/front-view-of-led-headlights-sport-car-on-black-background-photo.jpg"
                        alt="Car"
                        /* 2. Added '-scale-x-100' to flip image horizontally */
                        /* Added 'object-cover' so it fills the banner area nicely */
                        className="w-full h-full object-cover -scale-x-100"
                    />
                </figure>

                {/* 3. Text content goes inside card-body, which overlays the image */}
                <div className="card-body justify-center">
                    <div className="card-title w-[60%] text-5xl font-bold text-blue-300 mb-8">
                        Bid on Unique Items <br /> from <span className="text-amber-400">Around the World</span>
                    </div>
                    <p className="text-gray-300 text-xl max-w-2xl">
                        Experience the thrill of cutting-edge design and performance.
                        Join our exclusive auction and bid on world-class luxury vehicles.
                    </p>
                    <div className="card-actions justify-start mt-2">
                        <button className="btn mb-15 bg-amber-400 hover:bg-amber-700 text-black border-none font-bold px-8">
                            Explore Auctions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannerr;