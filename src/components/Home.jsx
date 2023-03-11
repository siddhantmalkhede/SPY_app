import React from 'react'
import Chat from '../components2/Chat'
import Sidebar from '../components2/Sidebar'

 function Home () {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    
    </div>

  )
}


export default  Home