import React, { useState, useMemo } from 'react'
import * as R from 'ramda'

function RadomColor({ isRadomPage }){
  const hasData = R.compose(
    R.not,
    R.either(R.isNil, R.isEmpty)
  )
  
  const BOX_NUMBER = 64
  let box = []
  const [data,setData] = useState(box)
  
  function fetchColor () { 
    const r = () => Math.floor(Math.random()*256)
    return `rgb(${r()},${r()},${r()})`
  }

  const init = () => {
    for(let i = 0; i < BOX_NUMBER; i ++) {
      const item = {
        id: i,
        color: fetchColor()
      }
      box.push(item)
    }
    setData(box)
  }

  useMemo(() => {
    init()
  },[])

  const changeColor = (id) => {
    try {
      const item = {
        'id': id,
        'color': fetchColor()
      }
      const components = data.slice(0)
      components.splice(id,1,item)
      setData(components)
    } catch (err) {
      window.alert(err.message)
    }
  }

  return (
      <div className = 'RadomColor' style = {{display: isRadomPage ? 'flex' : 'none'}}>
        {hasData(data) && data.map(item => (
          <div
            className = "radomDiv"
            key = {item.id}
            id = {item.id}
            style = {{backgroundColor: item.color}}
            onClick = {() => {
              changeColor(item.id)
            }}
          />
        ))}
      </div>
  )
}

export default RadomColor