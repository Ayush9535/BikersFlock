import React, { useState , useEffect } from 'react'
import EventCard from '../Components/EventCard'
import axios from 'axios'

function Events() {

  const [events,setEvents] = useState([])

  useEffect(()=>{
    document.title = "Events"
    axios.get("http://localhost:3000/events")
      .then((res)=>{
        console.log(res.data)
        setEvents(res.data)
      })
  },[])

  return (<>
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Events</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-12">
        {events.map((el,index)=>{
          return <EventCard key={el._id} el={el} />
        })}
      </div>
    </div>
  </>
  )
}

export default Events