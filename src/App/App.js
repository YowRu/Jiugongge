import React, { useState } from 'react'
import RadomColor from './RadomColor'
import SameColor from './SameColor'
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
    <div className='main'>
        <div className='title'>
            <h1>功能選單</h1>
            <p>
                <span onClick={radomColor}>點擊區塊變色</span>
                <span onClick={sameColor}>點擊相同區塊</span>
            </p>
        </div>
        <div className='contain'>
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

export default App
