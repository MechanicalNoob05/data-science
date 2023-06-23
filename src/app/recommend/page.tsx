'use client'
import { Hint } from 'react-autocomplete-hint';
import Navbar from '../component/navbar'
import { useState,useEffect } from 'react'
import Title from '../datatitlecolab.json'
import Booksugget from '../datacolab.json'
export default function page(params:any) {
  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')

  const getData = ()=>{
    const res = Title
    var hintArray = []
       res.all.map(a => hintArray.push(a.Book_Title))
        setHintData(hintArray)
  }
  useEffect(() => {
    getData()
  }, [])
  return(
    <div className="text-xl bg-gray-100 min-h-screen">
      <Navbar/>
      <div className="container mx-auto my-20 p-6 bg-white shadow-sm">
        <div className='pb-6 z-0'>
          <Hint  options={hintData} allowTabFill>
            <input placeholder='Enter Book Name here' type='text' className='border-b-2 p-2 shadow-sm w-full z-0'
              value={text}
              onChange={e => setText(e.target.value)} 
            />
          </Hint>
        </div> 
        <div>
          {
            Title.all.map((item,index)=>{
              if(item.Book_Title === text){
                return (

                  Booksugget.all[index].book.map((item)=>{
                    return (
                      <div className='p-2 border-b-2 border-gray-100'>{
                        Title.all[item].Book_Title}
                      </div>
                    )
                  })

                )
              }
            })
          }
        </div> 
      </div> 
    </div> 
  )
}
