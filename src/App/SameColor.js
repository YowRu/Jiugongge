import React ,{ useEffect }from 'react'

function SameColor({ isSamePage }){
    const init = () => {
        //顏色字串
        let colorStr='';
        function color () { 
            const r = function () { return Math.floor(Math.random()*256) };
            return colorStr = 'rgb(' + r() +',' + r() +',' + r() +')';
        }
        
        const Height = window.screen.height * 0.8
        const Width = window.screen.width
        const ulHeight = (Height - 110 )/8
        const ulWidth = Width * 0.9
        const liWidth = (ulWidth * 0.9)/8
        //ul
          for (let i=1;i<9;i++) { 
              const ul = document.createElement('ul');
              document.querySelector('.SameColor').appendChild(ul).style.width = ulWidth + 'px'      
          }
        //li 
          for (let j=0;j<8;j++) {
              const x = document.querySelectorAll('ul');
              for (let k=0;k<x.length;k++) {
                  let li = document.createElement('li');
                  document.querySelector('.SameColor').querySelectorAll('ul')[k].appendChild(li).style.height = ulHeight + 'px' 
                  document.querySelector('.SameColor').querySelectorAll('ul')[k].appendChild(li).style.width = liWidth + 'px' 
              }
          }
        //color Array
        let colorArray =[]
        const liNumber = document.querySelectorAll('li').length; 
        for (let l=0;l<liNumber/2;l++) {
          color();
          colorArray.push(colorStr)
        }
        
        //1~32
        const A = new Array(32);
        const arr = [];
        for (let i = 0; i < 32; i++) {
            arr[i] = i;
        }
        function ans() {
          let x
          for (let i = 1; i < 33; i++) {
              //這邊記得要用 -i，元素每取走一個，就少一個。
              x = Math.floor(Math.random() * (34 - i))
              A[i - 1] = arr.splice(x, 1)}
          return A
      }
      ans()
      for(let i = 0; i<=31;i++){
        const value = A[i]
        const num = value[0]
        if(num){
          document.querySelector('.SameColor').querySelectorAll('li')[num].style.backgroundColor = colorArray[num]
        }
      }
      
        
        for (let j = 32; j <= 63; j++) {
            const value = A[j-32]
            const num = value[0]
            if(num){
              document.querySelector('.SameColor').querySelectorAll('li')[j].style.backgroundColor = colorArray[num]
            }
        }
         
      }
      
      useEffect(()=>{
        init()
      },[])
      return (
        <div className='SameColor' style={{display: isSamePage ? 'block' : 'none'}}></div>
      );
}

export default SameColor;