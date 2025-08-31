'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Emptystate from './_components/Emptystate';
import Link from 'next/link';

const Dashboard = () => {

  const [videosList, setVideosList] = useState([]);
  return (
    <div className=''>

      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href="/dashboard/create-new">
          <Button>+ Create New</Button>
        </Link>
      </div>
      {videosList.length === 0 && <div>
        <Emptystate />
      </div>}
    </div>
  )
}

export default Dashboard