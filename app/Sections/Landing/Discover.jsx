import { Input } from '@/components/ui/input'
import React from 'react'

const Discover = () => {
  return (
    <div className='flex justify-between items-center p-6'>
      <div className='text-white text-4xl'>
        <h1>Discover Events</h1>
      </div>
      <div className='w-[30%]'>
        <Input type="text" placeholder="search events" className="bg-gray-900 focus:bg-gray-700 text-white"/>
      </div>
    </div>
  )
}

export default Discover
