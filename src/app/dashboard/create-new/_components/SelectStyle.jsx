import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const SelectStyle = ({ onUserSelect }) => {
  const styleOptions = [
    {
      name: 'Realistic',
      image: '/realistic.png'
    },
    {
      name: 'Cartoon',
      image: '/cartoon.png'
    },
    {
      name: 'Comic',
      image: '/comic.png'
    },
    {
      name: 'Water Color',
      image: '/WaterColor.png'
    },
    {
      name: 'GTA Style',
      image: '/GTAStyle.png'
    },
  ]

  const [selectedOption, setSelectedOption] = useState();
  return (
    <div className='mt-7'>
      <h2 className='font-bold text-2xl text-primary'>Style</h2>
      <p className='text-gray-500'>Select your preferred style: </p>
      <div className={`grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mt-3 `}>
        {styleOptions.map((style, index) => (
          <div key={index} className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl
              ${selectedOption === style.name ? 'border-4 border-primary' : ''}`}
            onClick={() => {
              setSelectedOption(style.name)
              onUserSelect('image-style', style.name)
            }} >
            <Image src={style.image} alt={style.name} width={100} height={100}
              className='h-40 object-cover rounded-lg w-full' />
            <h2 className='absolute bottom-0 bg-black p-1 w-full text-white text-center rounded-b-lg'>{style.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectStyle