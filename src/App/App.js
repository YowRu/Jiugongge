import React, { useState } from "react"
import RadomColor from "./RadomColor"
import SameColor from "./SameColor"
import './App.css'

function App() {
  const [isSamePage,setIsSamePage] = useState(false)
  const [isRadomPage,setIsRadomPage] = useState(true)
  
  const sameColor = () => {
    setIsSamePage(true)
    setIsRadomPage(false)
  }
  const radomColor = () => {
    setIsRadomPage(true)
    setIsSamePage(false)
  }
  
  return (
    <div id='main'>
        <div id='title'>
            <h1>功能選單</h1>
            <p>
                <span onClick={radomColor}>隨機顏色</span>
                <span onClick={sameColor}>相同顏色</span>
            </p>
        </div>
        <div id='contain'>
          <SameColor
            isSamePage={isSamePage}
          />
          <RadomColor
            isRadomPage={isRadomPage}
          />
        </div>
    </div>
  )
}

export default App;
