import React,{useContext} from 'react'
import "./Main.css"
import {assets} from "../../assets/assets"
import { Context } from "../../Context/Context";

const Main = () => {
  const {onSent,recentpromt,showresult,loading,resultdata,setinput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>chatbot</p>
            <img src= {assets.user_icon}alt="" />
        </div>
        <div className="main-container">
          {!showresult ?
          <>
          <div className="greet">
            <p><span>hello,Dev</span></p>
            <p>How can i Help you today</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>suggest beautiful places to see on an upcoming trip </p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept </p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>give me idea for an upcoming SIH </p>
              <img src={assets.menu_icon} alt="" />
            </div>
            <div className="card">
              <p>improve the redability of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
           </div>
          </>:
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentpromt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              <p dangerouslySetInnerHTML={{__html:resultdata}}></p>
            </div>
          </div>

          
        }
           
         
          

          <div className="main-bottom">
            <div className="search-box">
              <input  onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon}alt="" />
                <img onClick={()=>onSent()}src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
              chatbot is here to help you guys feel free to ask anything 

            </p>
          </div>
        </div>
      
    </div>
  )
}

export default Main
