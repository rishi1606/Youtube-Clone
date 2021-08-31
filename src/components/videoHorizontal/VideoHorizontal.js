import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "../../components/videoHorizontal/videoHorizontal.css"
import { categoriesBar } from '../../videos.action'

const list=[
  "All",
  "Football",
  "Cricket",
  "Coding",
  "Gaming",
  "Facts Book"
]

const VideoHorizontal = () => {
  
  const[active,setActive]=useState("All")
  const dispatch=useDispatch();
  const handleClick=(l)=>{
    setActive(l)
    dispatch(categoriesBar(l))
    }
  return (
    <div className="categoriesBa">
        {
          list.map((l,i)=>(
          <span
              
               onClick={() => handleClick(l)}
               key={i}
               className={active === l ? 'active' : ''}>
               {l}
            </span>
              
          ))
        }
        
    </div>
  )
}

export default VideoHorizontal
