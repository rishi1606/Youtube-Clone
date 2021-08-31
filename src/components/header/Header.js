import React, { useState } from "react"
import "./header.css"

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"
import { Link, useHistory } from "react-router-dom"

const Header = ({ handleToggleSidebar }) => {
   const [input,setInput]=useState('')
   const history=useHistory()
   const handleSubmit =(e)=>{
      e.preventDefault()
      history.push(`search/${input}`)
   }
   return (
      <div className="header ">
         <FaBars
            className="header__menu"
            size={26}
            onClick={() => handleToggleSidebar()}
         />
      <Link to="/">
         <img
            src="https://authorcblee.files.wordpress.com/2017/10/ytlogo_old_new_animation-0.gif"
            alt=""
            className="header__logo"
         />
      </Link>   

         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={input} onChange={e=>setInput(e.target.value)}/>
            <button type="submit">
               <AiOutlineSearch size={22} />
            </button>
         </form>

         <dic className="header__icons">
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img
               src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
               alt="avatar"
            />
         </dic>
      </div>
   )
}

export default Header
