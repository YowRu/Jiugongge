import React from 'react'
import * as R from 'ramda'

function RadomColor({ isRadomPage }){

      const hasData = R.compose(
        R.not,
        R.either(R.isNil, R.isEmpty)
      ) 
      
      const BOX_NUMBER = 64

      let colorStr
      function color () { 
          const r = function () { return Math.floor(Math.random()*256) }
          return colorStr = `rgb(${r()},${r()},${r()})`
      }

      let data =[]
      for(let i = 0; i < BOX_NUMBER; i ++) {
        color()
        const item = {}
        item['id'] = i
        item['color'] = colorStr
        data.push(item)
      }

      const changeColor = id => {
        color()
        const item = {}
        item['id'] = id
        item['color'] = colorStr
        data.splice(id, 1, item)
        console.log('click')
        return data
      }

      return (
          <div className='RadomColor' style={{display: isRadomPage ? 'flex' : 'none'}}>
            {hasData(data) && data.map(item => (
                <div
                  className = "radomDiv"
                  key = {item.id}
                  id = {item.id}
                  style = {{backgroundColor: item.color }}
                  onClick = {() => {
                    changeColor(item.id)
                  }}
                />
            ))}
          </div>
      
      )
}

export default RadomColor