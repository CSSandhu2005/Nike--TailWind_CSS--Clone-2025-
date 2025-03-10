import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" 
            className="h-[120px] w-[120px] rounded-full object-cover" 
        />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-4 flex items-center justify-center gap-2.5">
            <img src={star} widht={24} height={24} className="object-contain m-0" />
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin font-bold text-3xl text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard