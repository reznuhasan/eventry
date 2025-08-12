import HeroSection from '@/app/Sections/Details/HeroSection'
import MapDetails from '@/app/Sections/Details/MapDetails'
import { getEventById } from '@/quires/events'
import React from 'react'

const  DetailsPage = async(props) => {
  const {params}=await props
  const id=params?.id
  const event=await getEventById(id);
  return (
    <div>
      <HeroSection event={event}/>
      <MapDetails event={event}/>
    </div>
  )
}

export default DetailsPage
