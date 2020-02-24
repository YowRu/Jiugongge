import React ,{ useEffect }from 'react'

function RadomColor({ isRadomPage }){
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
              document.querySelector('.RadomColor').appendChild(ul).style.width = ulWidth + 'px'      
          }
        //li 
          for (let j=0;j<8;j++) {
    
              var x = document.querySelector('.RadomColor').querySelectorAll('ul');
              for (let k=0;k<x.length;k++) {
                  let li = document.createElement('li');
                  color();
                  document.querySelector('.RadomColor').querySelectorAll('ul')[k].appendChild(li).style.height = ulHeight + 'px' 
                  document.querySelector('.RadomColor').querySelectorAll('ul')[k].appendChild(li).style.width = liWidth + 'px' 
                  document.querySelector('.RadomColor').querySelectorAll('ul')[k].appendChild(li).style.backgroundColor=colorStr;
              }
          }
          
          
        //click 
          document.addEventListener ('click', function(event) {
              var targetElement = event.srcElement.localName;
    
              if (targetElement === 'li') {
                  color();
                  event.srcElement.style.backgroundColor=colorStr;
              }
          })
      }
      
      useEffect(()=>{
        init()
      },[])
      return (
        <div className='RadomColor' style={{display: isRadomPage ? 'block' : 'none'}}></div>
      );
}

export default RadomColor;