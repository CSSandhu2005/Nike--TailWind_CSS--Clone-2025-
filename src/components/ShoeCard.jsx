import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
    const handleCLick = () => { 
        if ( bigShoeImage !== imgURL.bigShoe ) { 
            changeBigShoeImage(imgURL.bigShoe) ; 
        }
    }
    return ( 
        <div className={`border-2 rounded-xl cursor-pointer ${bigShoeImage === imgURL.bigShoe ? "border-coral-red" : "border-transparent"}`}
        onClick={handleCLick}
        >
            <div className="flex items-center justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img src={imgURL.thumbnail} alt="shoe collection "
                width={127}
                height={103}
                className="object-contain"
                />
            </div>
        </div>
    ); 
};

export default ShoeCard;