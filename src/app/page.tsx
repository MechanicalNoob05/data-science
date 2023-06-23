import Data from './data.json'
import { FaDotCircle, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { AiOutlineReddit } from "react-icons/ai";
import { FiGithub } from "react-icons/fi" 
import { FiMail } from "react-icons/fi";
export default function Home() {
  const features ={
    "all":[
      {
        "name":"hehe1",
        "desc":"popular",
        "nav":"/popular",
        "style":"bg-white text-2xl justify-around p-6 flex flex-col items-center rounded-3xl border-2 shadow h-[26rem]"
      },
      {
        "name":"heh1",
        "desc":"recommend",
        "nav":"/recommend",
        "style":"bg-white text-2xl justify-around p-6 flex flex-col items-center rounded-3xl border-2 shadow h-[30rem]"
      },
      {
        "name":"has",
        "desc":"volacx",
        "nav":"/all",
        "style":"bg-white text-2xl justify-around p-6 flex flex-col items-center rounded-3xl border-2 shadow h-[26rem]"
      }
    ]
  }
  return (
    <main className="text-xl bg-[url('https://images.pexels.com/photos/612997/pexels-photo-612997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-fixed bg-gray-100">
      <div className="h-screen flex items-center justify-items-center">
        <h1 className="leading-tight p-24 h-full backdrop-blur-sm bg-white/5 w-full font-extrabold xl:text-[12rem]">Book Recomendation System</h1>
      </div>
      <div className="h-screen rounded-t-3xl bg-gray-100 p-24">
        <h2 className="text-8xl font-medium">What</h2>
        <p className="text-4xl py-5"> Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <h3 className="text-3xl underline font-semibold decoration-red-500">Features</h3>
        <div className="grid grid-cols-3 items-center gap-6 py-6">
          {
            features.all.map((item)=>{
              return(
                <Card data={item}/>
              )
            })
          }
        </div>
      </div>
      <div className="h-screen bg-white p-24 flex flex-col justify-around">
        <h2 className="text-8xl font-medium">Methods</h2>
        <p className="text-4xl text-justify py-5">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
        <h3 className="text-3xl">More Information</h3>
        <ul className="text-3xl">
          <li>Github</li>
          <li>Youtube</li>
        </ul>
      </div>
      <div className="h-screen bg-gray-100 flex flex-col justify-between">
        <h2 className="text-8xl px-24 py-16 font-medium">Bye,</h2>
        <p className="text-4xl px-24"> Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <div className="bg-white">

          <p className="text-xl py-5 text-center">© 2023 Tejas Mayekar</p>
          <ul className="text-4xl mx-auto dark:text-slate-400 flex justify-around xl:w-1/3 lg:md:w-1/2 w-full">
            <li className="p-3"><a title="Github" href="https://github.com/MechanicalNoob05"><FiGithub/></a></li>
            <li className="p-3"><a title="Reddit" href="https://www.reddit.com/user/Mechanical_Noob_05"><AiOutlineReddit/></a></li>
            <li className="p-3"><a title="Linkedin" href="https://www.linkedin.com/in/tejas-mayekar-122a181a8/"><FaLinkedinIn/></a></li>
            <li className="p-3"><a title="Instagram" href="https://instagram.com/mechanical_noob?igshid=MzNlNGNkZWQ4Mg=="><FaInstagram/></a></li>
            <li className="p-3"><a title="Instagram" href="#"><FiMail/></a></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
function Card({...props}:any) {
  return(
    <div className={props.data.style}>
      <h1>{props.data.name}</h1>
      <h1>{props.data.desc}</h1>
      <a href={props.data.nav} className="font-medium py-2 px-8 rounded-lg border-2">Lets go</a>
    </div>
  )
}
