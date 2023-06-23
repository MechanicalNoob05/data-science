import Data from './data.json'
import { FaDotCircle, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { AiOutlineReddit ,AiOutlineStar, AiOutlineSearch, AiOutlineUnorderedList} from "react-icons/ai";
import { FiGithub } from "react-icons/fi" 
import { FiMail } from "react-icons/fi";
export default function Home() {
  const features ={
    "all":[
      {
        "id":"  ",
        "desc":"List all the popular books that are liked by more than 100 people",
        "nav":"/popular",
        "style":"bg-white text-2xl justify-around p-6 flex flex-col items-center rounded-3xl border-2 shadow h-[26rem]"
      },
      {
        "id":"  ",
        "desc":"Get recommendations for new Books to read on the basis of the books you have already read",
        "nav":"/recommend",
        "style":"bg-white text-2xl justify-around p-6 flex flex-col items-center rounded-3xl border-2 shadow h-[30rem]"
      },
      {
        "id":"  ",
        "desc":"List of all the books that were used for the data analysis purpose",
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
        <p className="text-4xl text-justify py-5">The book recommendation system uses collaborative filtering and popularity-based approaches to offer personalized and diverse book suggestions. Collaborative filtering analyzes user behavior and preferences to find patterns among users with similar tastes, while the popularity-based approach considers the overall reception of books. Both techniques are used to help guide users for better choice, the system helps users discover new books based on similar user preferences and ensures a mix of popular and niche titles for a varied reading experience.</p>
        <h3 className="text-3xl">More Information</h3>
        <ul className="text-3xl">
          <li>Github</li>
          <li>Youtube</li>
        </ul>
      </div>
      <div className="h-screen bg-gray-100 flex flex-col justify-between">
        <h2 className="text-8xl px-24 pt-16 font-medium">Bye,</h2>
        <p className="text-4xl px-24">This side project is a result of my desire to delve deeper into the realm of data science and gain a better understanding of its applications. By utilizing various data science techniques, I aimed to analyze data and extract valuable insights. My ultimate goal was to create something that would not only be informative but also user-friendly and practical.
<br/>
<br/>
One of the key objectives of this project was to combine the power of data science with web development. By integrating these two disciplines, I sought to create a platform or application that would provide a seamless and intuitive user experience. Through the convergence of data science and web development, I aimed to offer users a practical tool that harnesses the potential of data-driven insights in a user-friendly manner.

<br/>
<br/>
I am excited to present this side project and I sincerely hope that you find it enjoyable and useful. Your feedback and suggestions are greatly appreciated as they will help me improve and refine the project further. Please feel free to reach out to me through the provided links below if you have any questions, comments, or collaboration opportunities. Thank you for your support, and I look forward to hearing from you.</p>
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
      <h1 className="text-4xl font-medium">
        {
          props.data.id 
          
        }
      </h1>
      <h1>{props.data.desc}</h1>
      <a href={props.data.nav} className="font-medium py-2 px-8 rounded-lg border-2">Lets go</a>
    </div>
  )
}
