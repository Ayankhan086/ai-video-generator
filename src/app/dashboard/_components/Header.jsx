import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import {Button} from '../../../components/ui/button'
import React from 'react'

const Header = () => {
  return (
    <div className='p-3 px-5 flex justify-between items-center border-b shadow-md'>
        <div className='flex gap-1 items-center'>
            <Image src={"/logo.png"} width={30} height={30} alt="Logo" />
            <h2 className='font-bold text-xl'>Ai Short Vid</h2>
        </div>

        <div className='flex gap-3 items-center'>
            <Button>Dashboard</Button>
            <UserButton />
        </div>
    </div>
  )
}

export default Header