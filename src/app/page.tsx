import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Button>Click Me</Button>
      <UserButton />
    </div>
  )
}

export default page