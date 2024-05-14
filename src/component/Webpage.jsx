import React, { useState } from 'react'

const Webpage = () => {

  const [title, setTitle] = useState("")
  const [desc, setdesc] = useState("")
 const [task,setTask]= useState("")
let tasl=()=>{
return (<>
  <li>`<h2>${title}</h2>`</li>
</>)
}
  return (
    <>
      
     <div className=' bg-white h-screen w-screen text-black'>
<header>
<nav className=' flex justify-around py-5 border-b-2 mx-5 items-center border-gray-300'>
<h1 className=' text-2xl font-extrabold uppercase text-gray-800'>&lt;Techies/&gt;</h1>
  <ul className=' flex gap-x-14 text-lg uppercase text-gray-800'>
    <li>home</li>
    <li>about</li>
    <li>contact</li>
  </ul>
  <button className=' bg-green-400 py-1 px-5 rounded-lg flex items-center justify-center'>Register</button>
</nav>
</header>

<article>
<h1 className=' text-8xl font-semibold px-28 py-20 pb-0 text-center font-mono selection:bg-green-400'>The <span className=' font-extrabold text-green-500 selection:bg-black'>smartest</span> Hackathon Ever online!</h1>
<p className=' text-center text-2xl mt-10 text-slate-600'>Be the part of this and join our community to learn more!</p>
<p className=' text-center text-2xl mt-1 text-slate-600'>Let's create the Hackathon and innovate things.</p>
<p className=' text-center text-2xl mt-1 text-slate-600'>Big day for Developers that day!</p>
<p className=' text-center text-2xl mt-1 text-slate-600'></p>
<div className=' flex items-center justify-center gap-4 mt-8'>

<button className=' border-green-400 border-2 px-10 py-1 rounded-lg font-semibold text-green-500 text-2xl'>Explore</button>
<button className=' bg-green-500 border-2 px-10 py-1 rounded-lg font-semibold text-white text-2xl'>Connect</button>
</div>
</article>

<footer>

</footer>

     </div>
    </>)
}

export default Webpage