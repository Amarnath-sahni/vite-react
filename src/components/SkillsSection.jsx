import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaServer,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";


const skillGroups = [
  {
    title: "Frontend Development",
    icon: FaCode,
    skills:[
      {name:"React.js",icon:FaReact,level:"Advanced"},
      {name:"JavaScript",icon:SiJavascript,level:"Advanced"},
      {name:"Redux",icon:SiRedux,level:"Intermediate"},
      {name:"Tailwind CSS",icon:SiTailwindcss,level:"Advanced"},
      {name:"HTML5",icon:FaHtml5,level:"Advanced"},
      {name:"CSS3",icon:FaCss3Alt,level:"Advanced"},
      {name:"Vite",icon:SiVite,level:"Intermediate"},
    ]
  },

  {
    title:"Backend Development",
    icon:FaServer,
    skills:[
      {name:"Node.js",icon:FaNodeJs,level:"Advanced"},
      {name:"Express.js",icon:SiExpress,level:"Advanced"},
      {name:"REST APIs",icon:FaServer,level:"Advanced"},
      {name:"JWT Authentication",icon:FaCode,level:"Advanced"},
    ]
  },


  {
    title:"Database & Tools",
    icon:FaDatabase,
    skills:[
      {name:"MongoDB",icon:SiMongodb,level:"Advanced"},
      {name:"Git",icon:FaGitAlt,level:"Advanced"},
      {name:"Postman",icon:SiPostman,level:"Intermediate"},
      {name:"Java",icon:FaJava,level:"Intermediate"},
      {name:"C++",icon:SiCplusplus,level:"Intermediate"},
    ]
  }
];



const SkillsSection =()=>{


return(

<section className="
py-20 
bg-gradient-to-b from-black via-gray-900 to-black 
text-white
overflow-hidden
">


<div className="max-w-7xl mx-auto px-6">


{/* Heading */}

<motion.div
initial={{opacity:0,y:-40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-center mb-20"
>

<h2 className="
text-4xl md:text-5xl 
font-bold uppercase
">

My <span className="text-yellow-400">
Skills
</span>

</h2>


<p className="
text-gray-400 
mt-4
max-w-xl
mx-auto
">

Technologies I use to build scalable, 
modern and production-ready applications.

</p>


<div className="
h-1 w-32 bg-yellow-400 
mx-auto mt-6 rounded-full
"/>


</motion.div>





<div className="
grid md:grid-cols-3 
gap-8
">


{
skillGroups.map((group,index)=>{

const GroupIcon=group.icon;


return(

<motion.div

key={group.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6,
delay:index*.2
}}

viewport={{once:true}}

className="
relative
bg-white/5
backdrop-blur-xl
border border-white/10
rounded-3xl
p-7
hover:border-yellow-400/50
transition-all
duration-500
hover:-translate-y-3
shadow-xl
"

>


{/* category */}

<div className="
flex items-center gap-3 mb-8
">

<div className="
w-12 h-12
rounded-2xl
bg-yellow-400
text-black
flex items-center justify-center
text-xl
shadow-lg shadow-yellow-400/30
">

<GroupIcon/>

</div>


<h3 className="
text-xl font-bold
">

{group.title}

</h3>


</div>





<div className="
space-y-5
">

{
group.skills.map((skill,i)=>{


const SkillIcon=skill.icon;


return(

<div
key={skill.name}
className="
group
flex items-center justify-between
bg-black/40
rounded-2xl
p-4
hover:bg-yellow-400/10
transition
"

>


<div className="
flex items-center gap-4
">


<SkillIcon
className="
text-3xl
text-yellow-400
group-hover:scale-125
transition
"
/>


<div>

<h4 className="
font-semibold
">

{skill.name}

</h4>

<span className="
text-xs text-gray-400
">

{skill.level}

</span>


</div>


</div>



<div className="
w-2 h-2 
rounded-full 
bg-yellow-400
animate-pulse
"/>


</div>

)

})
}


</div>


</motion.div>

)

})

}


</div>



{/* Bottom Highlight */}

<motion.div

initial={{opacity:0}}
whileInView={{opacity:1}}
viewport={{once:true}}

className="
mt-16
text-center
"

>

<div className="
inline-flex
items-center
gap-3
px-8 py-4
rounded-full
border border-yellow-400/30
bg-yellow-400/5
text-yellow-300
"
>

<FaCode/>

Building scalable MERN applications with clean architecture 🚀


</div>


</motion.div>



</div>


</section>

)

}


export default SkillsSection;
