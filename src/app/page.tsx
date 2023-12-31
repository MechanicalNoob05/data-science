'use client'
import { useState, useEffect } from 'react'
import { sha1 } from 'crypto-hash';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi"
import { FiMail } from "react-icons/fi";

export default function Home() {
  const [text, setTextInput] = useState("")
  var [output, setOutput] = useState("")
  const [password, setPassword] = useState(0)

  const sendHash = async () => {
    let response = await fetch(`https://api.pwnedpasswords.com/range/${output.slice(0, 5)}`);
    let responseText = await response.text();
    let arr = responseText.split("\r\n")
    let last = output.substring(5).toUpperCase()
    arr.map((item, index) => {
      let a: string[] = item.split(":")
      if (a[0] === last) {
        let times: number = parseInt(a[1])
        setPassword(times)
        return
      }
    })
  }
  const handleTextInput = async () => {
    setOutput(await sha1(text))
    setTextInput("")
    setPassword(0)
  }

  useEffect(() => {
    sendHash()
  }, [output])

  return (
    <main className="min-h-screen dark:text-[#dadada] xl:text-2xl  bg-cover bg-no-repeat bg-fixed bg-[url('https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] dark:bg-[url('https://images.pexels.com/photos/274886/pexels-photo-274886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <div className="flex justify-center items-center xl:p-20 py-20 h-screen w-screen">
        <div className='backdrop-blur-md bg-white/30 dark:bg-black/30 container mx-auto  rounded-md p-6 shadow flex flex-col justify-center items-center'>
          <h1 className='xl:text-[10rem] text-6xl font-extrabold font-mono py-6'>LOCKCHECK</h1>
          <p className='py-6'>Check your privacy threat level now! </p>
        </div>
      </div>
      <div className="flex min-h-screen w-screen rounded-t-[4rem] xl:p-10 pt-16 bg-gray-100 dark:bg-[#16161e]" id='what'>
        <div className='min- h-full w-full shadow rounded-lg m-auto p-6 bg-white dark:bg-[#1b1b27] dark:border-2 dark:border-[#dadada]/10'>
          <h3 className='text-3xl font-semibold underline dark:decoration-indigo-600 decoration-indigo-400 border-b-2 pb-6 dark:border-slate-700 '>What is it?</h3>
          <ul className='text-justify'>
            <li className='py-4'><p>It is a tool designed to help you assess the security of your passwords by checking if they have been compromised in any data breaches. In today's digital age, where data breaches are unfortunately common, cybercriminals can gain access to databases containing user passwords. They can then use these stolen passwords in various malicious activities, such as dictionary attacks.</p></li>
            <li className='py-4'><p>A dictionary attack is a method used by hackers to crack passwords by systematically trying a large number of commonly used words or phrases from a pre-existing list, known as a dictionary. By leveraging leaked passwords from data breaches, attackers can significantly increase their chances of success in such attacks.</p></li>
            <li className='py-4'><p>The tool in question aims to protect you by querying a database of known compromised passwords, collected from various sources, including public data breaches. By comparing your password against this database, <span className='font-bold'>While Keeping Your Password Safe In the process</span> it can indicate whether your password has been leaked and potentially used in a dictionary attack. <span className='text-violet-500 underline'><a href="#how">Learn more....</a></span></p></li>
            <li className='py-4'><p>By providing this service, the tool empowers users to make informed decisions about their password security. If the tool indicates that your password has been compromised, it strongly advises changing it immediately to prevent unauthorized access to your accounts. This way, you can safeguard your personal information, online accounts, and digital assets from being compromised due to the reuse of weak or exposed passwords.</p></li>
            <li className='py-4'><p>Remember, using unique, complex, and hard-to-guess passwords for each of your online accounts is crucial in maintaining your digital security. Regularly checking your passwords with such a tool can be a valuable practice to ensure your accounts remain protected from the evolving threats in the digital landscape.</p></li>
            <li className='py-4 text-center text-red-400'><a href='#try'>Check Your Password...</a></li>
          </ul>
        </div>
      </div>
      <div className="flex xl:h-screen h-max py-10 bg-gray-100 dark:bg-[#16161e]" id='try'>
        <div className="p-6 bg-white dark:bg-[#1b1b27] border-2 rounded shadow container justify-center m-auto dark:border-2 dark:border-[#dadada]/10">
          <div className="pb-6 dark:border-slate-700 flex xl:flex-row flex-col items-center">
            <input placeholder="Enter Password to Check" value={text} type="password" className="p-2 w-full rounded border-b-2 dark:border-slate-700 dark:bg-[#00000000] " onChange={(e) => { setTextInput(e.target.value) }} />
            <button className="w-1/4 xl:mx-6 my-6 p-2 border-2 dark:text-[#ffffff] dark:shadow-[#737176] dark:bg-[#000000]/30 hover:bg-[#f44336]/80 hover:text-black transition ease-in-out duration-300 dark:border-0 hover:shadow-sm rounded" onClick={handleTextInput}>Check</button>
          </div>
          <h1 className="py-6">SHA1 Hash: {output}</h1>
          <div className="text-center py-10">
            {
              password == 0 ? "" : <h1>Your password has been used for <span className="font-semibold underline text-red-500">{password}
              </span>{password > 1 ? " times" : " time"}</h1>
            }
          </div>
          <h2 className='text-center text-lg text-violet-600'><a href="#how">Learn how this works while keeping your password hidden</a></h2>
        </div>
      </div>
      <div className="flex min-h-screen w-screen xl:p-10 bg-gray-100 dark:bg-[#16161e]" id='how'>
        <div className='min-h-full w-full shadow rounded-lg m-auto p-6 bg-white dark:bg-[#1b1b27] dark:border-2 dark:border-[#dadada]/10'>
          <h3 className='text-3xl font-semibold underline dark:decoration-indigo-600 decoration-indigo-400 border-b-2 pb-6 dark:border-slate-700 '>How Does This Works?</h3>
          <ul>
            <li className='py-4'><p>The method used in the process is called k-anonymity, it basically maintains a certain level of anonymity between the sender and checker. It works the following way:</p></li>
            <li className='py-4'>
              <ul className='list-disc px-6'>
                <li className='p-2'>You Enter Password</li>
                <li className='p-2'>The SHA1 Hash is created of your password on your computer</li>
                <li className='p-2'>The starting 5 characters of the hashed Password is send to Database API point using https Protocol</li>
                <li className='p-2'>The API sends a list of breached Passwords whose hash started with the same 5 starting characters as your password and no of times it was found</li>
                <li className='p-2'>Your browser then checks if the rest of the hash is present in that list or not</li>
                <li className='p-2'>If your password is in that list it returns how many times it occured</li>
                <li className='p-2'>If not then the field will be empty</li>
              </ul>
            </li>
            <li className='py-4'><p>The SHA1 hashing algorithm is not the best but still gets the job done, the main reason for using this algorithm is the database which stores all the password has the passwords hashed in SHA1. The https protocol adds another layer of encryption on top of it to make it more secure. This method helps to keep complete privacy of the user and still lets the user know if his/her password is leaked or not. You can view the source code <a className='text-violet-500' href="https://github.com/MechanicalNoob05/data-science">here.</a></p></li>
            <li className='py-4'><p>Since all the work is done on your device the privacy is maintained all while giving the results you want as long as your device is not compromised no one will find out your password. For more detailed Explaination you can watch this video by <a className='text-violet-500' href="https://www.youtube.com/watch?v=hhUb5iknVJs">Computerphile</a></p></li>
          </ul>
        </div>
      </div>
      <div className="flex min-h-max w-screen xl:p-10 flex-col bg-gray-100 dark:bg-[#16161e]" id='contact'>
        <div className="border-t-2 w-full dark:border-slate-600 xl:pt-4 pt-4 grid">
          <ul className="justify-self-center xl:text-2xl dark:text-slate-400 flex justify-around xl:w-1/3 lg:md:w-1/2 w-full">
            <li className="p-3"><a title="Github" href="https://github.com/MechanicalNoob05"><FiGithub /></a></li>
            <li className="p-3"><a title="Linkedin" href="https://www.linkedin.com/in/tejas-mayekar-122a181a8/"><FaLinkedinIn /></a></li>
            <li className="p-3"><a title="Instagram" href="https://instagram.com/mechanical_noob?igshid=MzNlNGNkZWQ4Mg=="><FaInstagram /></a></li>
            <li className="p-3"><a title="Instagram" href="#"><FiMail /></a></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
