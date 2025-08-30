'use client'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { db } from '@/config/db'
import { Users } from "@/config/Schema"
import { eq } from 'drizzle-orm'


const Provider = ({ children }) => {

  const { user } = useUser();

  const isNewUser = async () => {

    const result = await db.select().from(Users).where(
      eq(Users.email, user?.primaryEmailAddress?.emailAddress)
    );

    console.log(result);

    if(!result[0]) {
      await db.insert(Users).values({
        email: user?.primaryEmailAddress?.emailAddress,
        name: user?.fullName ,
        imageUrl: user?.imageUrl
      });
    }

  }

  useEffect(() => {
    user && isNewUser();
  }, [user]);

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider