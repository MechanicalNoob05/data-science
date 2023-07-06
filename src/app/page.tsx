'use client'
import { useState,useEffect } from 'react'
import {sha1,sha256,sha384,sha512} from 'crypto-hash';
export default function Home() {
  const [text,setTextInput]=useState("")
  var [output,setOutput]=useState("")
  const [password ,setPassword]=useState()

  const sendHash = async()=>{
    let response = await fetch(`https://api.pwnedpasswords.com/range/${output.slice(0,5)}`);
    let responseText = await response.text();
    let arr = responseText.split("\r\n")
    let last = output.substring(5).toUpperCase()
    arr.map((item,index)=>{
            let a: string[] = item.split(":")
            if(a[0]=== last){
              console.log(a[0])
              setPassword(a[1])
              return
            }
          })
  }
  const handleTextInput = async () => {
    setOutput(await sha1(text))
    setTextInput("")
  }

  useEffect(() => {
    sendHash()
  }, [output])

  return (
    <main className="min-h-screen text-2xl">
      <div className="flex h-screen w-screen">
      <div className="p-6 bg-white border-2 shadow container justify-center m-auto">
      <div className="bg-white py-4 border-b-2 flex">
        <input placeholder="Enter Password to Check" value={text} type="text" className="p-2 w-full border-2" onChange={(e)=>{setTextInput(e.target.value)}}/>
        <button className="w-1/4 mx-6 border-2 shadow rounded" onClick={handleTextInput}>Check</button>
      </div>
        <h1 className="py-6">SHA1 Hash: {output}</h1>
      <div className="text-center py-10">
        {
         password == null ? "":<h1>Your password has been used for <span className="font-semibold underline">{password}</span>{password>1 ? " times":" time"}</h1>
        }
      </div>
      </div>
      </div>
    </main>
  )
}
