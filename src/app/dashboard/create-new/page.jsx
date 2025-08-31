'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import Selecttype from './_components/SelectStyle'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import {Button } from '../../../components/ui/button'

const CreateNew = () => {
 
    const [formData, setFormData] = useState([])
  const onHandleInputChange = (fieldName, fieldValue) => {
     console.log(fieldName,fieldValue);
     
     setFormData(prevData => ({
         ...prevData,
         [fieldName]: fieldValue
     }));
  }



  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>
        <div className='mt-10 shadow-md p-10'>
            {/* Select topic comp */}
            <SelectTopic onUserSelect={onHandleInputChange}/>
            {/* Select style comp */}
            <SelectStyle onUserSelect={onHandleInputChange}/>
            {/* Select duration comp */}
            <SelectDuration onUserSelect={onHandleInputChange}/>
            {/* button */}
            <Button className='mt-10 w-full cursor-pointer'>Create Short Video</Button>
        </div>
    </div>
  )
}

export default CreateNew