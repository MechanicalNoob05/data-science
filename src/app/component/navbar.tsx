'use client'
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import {AiOutlineClose} from"react-icons/ai"

export default function Navbar() {
  const [toggle,setToggle] = useState(false)
  const vi ="absolute top-0 h-screen w-screen z-10 -translate-x-full bg-slate-200 hidden"
  const ve ="absolute top-0 h-screen w-screen z-20 dark:bg-[#30475E] bg-slate-200 px-20 xl:text-6xl flex items-center font-semibold"
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  return(
  <div className="sticky bg-white dark:text-white top-0 px-10 py-6 grid">
<button className="justify-self-end text-2xl z-30" onClick={handleToggle}>{toggle? <AiOutlineClose/>:<FaBars/>}</button>
      <div className={toggle ? ve:vi}>
        <ul>
          <li className="py-6 hover:underline" ><a href="/" onClick={handleToggle}>Home</a></li>
          <li className="py-6 hover:underline" ><a href="/popular" onClick={handleToggle}>Popular</a></li>
          <li className="py-6 hover:underline" ><a href="/recommend" onClick={handleToggle}>Recommendation</a></li>
          <li className="py-6 hover:underline" ><a href="/all" onClick={handleToggle}>View all Books</a></li>
        </ul>
      </div>
    </div>
  )
}
