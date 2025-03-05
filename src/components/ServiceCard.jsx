import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="px-10 py-16 sm:min-w-[350px] sm:w-[350px] rounded-[20px] shadow-3xl flex-1">
        <div className="w-11 h-11 flex items-center justify-center bg-coral-red rounded-full">
            <img src={imgURL} alt={label} height={24} width={24} />
        </div>
        <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h1>
        <p className="mt-3 font-montserrat text-lg leading-normal text-slate-gray break-words">{subtext}</p>
    </div>
  )
}

export default ServiceCard