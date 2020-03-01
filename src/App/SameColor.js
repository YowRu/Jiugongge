import React ,{ useEffect }from 'react'

function SameColor({ isSamePage }){
    const init = () => {
        //顏色字串
        let colorStr=''
        function color () { 
            const r = function () { return Math.floor(Math.random()*256) }
            return colorStr = 'rgb(' + r() +',' + r() +',' + r() +')'
        }
        
        const Height = window.screen.height * 0.8
        const Width = window.screen.width
        const ulHeight = (Height - 110 )/8
        const ulWidth = Width * 0.9
        const liWidth = (ulWidth * 0.9)/8
        
        for (let i=1;i<65;i++) {
          const DIV = document.createElement("div")
          document.querySelector('.SameColor').appendChild(DIV).setAttribute("id",i)
          document.querySelector('.SameColor').appendChild(DIV).style.height = ulHeight + 'px'
          document.querySelector('.SameColor').appendChild(DIV).style.width = liWidth + 'px' 
        }

        //color Array
        let colorArray =[]
        const liNumber = document.querySelectorAll('div').length
        for (let l=0;l<liNumber/2;l++) {
          color();
          colorArray.push(colorStr)
        }
       
        const arr = []
        for (let i = 0; i < 64; i++) {
            arr[i] = i
        }
        let result = []

      function myFunction() {

        const ranNum = 64
        for (let i = 0; i < ranNum; i++) {
        const ran = Math.floor(Math.random() * arr.length)
        result.push(arr.splice(ran, 1)[0])
        }
      }
      myFunction()

      for (let i = 0; i<=31;i++) {
      let num = i+1
        let id = String(num)
        document.getElementById(id).style.backgroundColor = colorArray[i]
      }
       
      for (let j = 32; j <= 63; j++) {
          let num = j-32
          let id = String(j+1)
          document.getElementById(id).style.backgroundColor = colorArray[num]
      }
      
       //click 
      let time = 0
      let score = 0
      let firstColor, secondColor, firstElement, secondElement, firstElementId, secondElementId
       document.querySelector('.SameColor').addEventListener ('click', function(event) {
        time++
        if (time % 2 === 1) {
          firstColor = event.srcElement.style.backgroundColor
          firstElement = event.srcElement
          firstElementId =  event.srcElement.id
        } else { 
          secondColor = event.srcElement.style.backgroundColor
          secondElement = event.srcElement
          secondElementId =  event.srcElement.id
        }
        if(firstElementId === secondElementId){
          time = 0
        }else{
          if (firstColor === secondColor) {
            time = 0
            score++
            alert('Good Job! Score: ' + score)
            firstElement.style.WebkitTransition = 'opacity 1s'
            secondElement.style.WebkitTransition = 'opacity 1s'
            firstElement.style.opacity = 0
            secondElement.style.opacity = 0
          }
        }
    }) 
        
      }
      
      useEffect(()=>{
        init()
      },[])
      return (
        <div className='SameColor' style={{display: isSamePage ? 'flex' : 'none'}}></div>
      );
}

export default SameColor