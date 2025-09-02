import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Home = () => {
  const [question, setquestion] = useState('');
  const askQuestion=()=>{
    console.log(question);
  }

  return (
     <div className="grid grid-cols-5  h-screen text-center">
      {/* sidebar */}
      <div className="col-span-1 bg-zinc-700 ">
        Sidebar
      </div>

      {/* Main Content (4 parts) */}
      <div className="col-span-4 bg-zinc-800 text-center">
        <div className='container h-130 '>

        </div>
        <div className='border border-white rounded-4xl w-1/2 m-auto  bg-zinc-700 text-white flex p-1'>
          <input type="text" className='w-full h-full p-3 text-xl outline-none' placeholder='Ask me anything'  value={question} onChange={(e)=>setquestion(e.target.value)}/>
          <button className='text-xl text-white p-3' onClick={askQuestion} >Ask</button>
        </div>
      </div>
    </div>
  )
}

export default Home
