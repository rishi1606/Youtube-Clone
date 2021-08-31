import React, { useState } from 'react'
import './categoriesBar.css'
import {useDispatch, useSelector} from "react-redux"
import {categoriesBar} from '../../videos.action'
const keyword = [
   'All',
   'Cricket',
   'Facts',
   'Gaming',
   'Facts Book',
   'Music',
   'GTA 5',
   'Red Dead Redemption 2',
   'Cricket',
   'Football',
   'Real Madrid',
   'Coding',
   'Ranveer Show',
   'Horror',
   'Did You Know Facts'
]

const CategoriesBar = () => {
   const [activeElement, setActiveElement] = useState('All');
   const dispatch=useDispatch();
   const handleClick = value => {
      setActiveElement(value)
      dispatch(categoriesBar(value))
   }
   
   return (
      <div className='categoriesBar'>
         {keyword.map((value, i) => (
            <span
               onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
      </div>
   )
}

export default CategoriesBar
