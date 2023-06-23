'use client'
import { useState } from 'react'
import Data from '../data.json'
import Navbar from '../component/navbar'
export default function page() {
const [listItems, setListItems] = useState(20);
  return(
    <div className="text-xl bg-gray-100 min-h-screen">
      <Navbar/>
      <div className="container mx-auto my-6 p-6 bg-white shadow-sm">

        <div className=" grid gap-4 xl:grid-cols-4">
        {
          Data.all.slice(0, listItems).map(rec => {
            return <Card data={rec}/>
          }
          )
        }
        </div>
        <div className="text-center pt-6 text-2xl">
          <button onClick={() => setListItems(listItems + 20)} >{listItems === Data.all.length ? "": "Show More...."}</button>
        </div>
      </div>
      </div>
  )
}

function Card({...props}:any) {
  return(
    <div className="p-2 border-2 flex flex-col justify-around">
      <img src={props.data.Image_URL_M} className="mx-auto w-1/2" alt={props.data.Book_Title}/>

      <div className="pt-4">
        <h2 className="font-bold">{props.data.Book_Title}</h2>
        <h2 className="font-bold">Author:<span className="font-normal"> {props.data.Book_Author}</span></h2>
        <h2 className="font-bold">Year of Publication:<span className="font-normal"> {props.data.Year_Of_Publication}</span></h2>
      </div>
    </div>
  )
}
