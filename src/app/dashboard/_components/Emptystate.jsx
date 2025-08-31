import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Emptystate = () => {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed border-gray-300 rounded-lg '>
      <h2>You dont have any short videos created.</h2>
      <Link href="/dashboard/create-new">
        <Button>Create short video</Button>
      </Link>
    </div>
  )
}

export default Emptystate