import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaTimes,
  FaPhoneAlt,
  FaReact,
  FaNodeJs,
  FaServer,
  FaCode,
  FaBolt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiRedux,
} from "react-icons/si";


// ================= EXPERIENCE DATA =================

const experiences = [
  {
    id: "speqto",
    type: "Internship",
    company: "Full Stack Developer Intern — Speqto Pvt. Ltd.",
    duration: "Dec 2025 – Feb 2026",

    techStack: [
      {
        name: "React.js",
        icon: FaReact,
        work:
          "Developed reusable React components, optimized rendering using React.memo, lazy loading and improved UI consistency across modules.",
      },
      {
        name: "Context API",
        icon: FaCode,
        work:
          "Implemented Context API for global state management and reduced unnecessary prop drilling across components.",
      },
      {
        name: "Redux",
        icon: SiRedux,
        work:
          "Managed complex application states using Redux patterns for predictable and scalable state handling.",
      },
      {
        name: "JWT Authentication",
        icon: SiJsonwebtokens,
        work:
          "Implemented JWT based authentication, protected routes and secure user authorization workflows.",
      },
      {
        name: "REST APIs",
        icon: FaServer,
        work:
          "Integrated REST APIs with pagination, filtering and optimized frontend-backend communication.",
      },
    ],

    highlights: [
      "Built reusable React.js UI components to improve maintainability and reduce duplicate code.",
      "Implemented authentication flow using JWT, protected routes and secure API communication.",
      "Developed pagination, filtering and optimized API data handling for better performance.",
      "Improved rendering performance using React.memo, lazy loading and component optimization.",
      "Collaborated with designers and stakeholders to convert requirements into production features.",
    ],
  },


  {
    id: "qspiders",
    type: "Internship",
    company: "MERN Stack Developer Intern — Q Spiders",
    duration: "Jul 2025 – Dec 2025",

    techStack: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        work:
          "Designed MongoDB schemas using Mongoose and optimized database queries using indexing.",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        work:
          "Created scalable backend APIs using Express.js with middleware, validation and error handling.",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        work:
          "Developed backend services, authentication workflows and API integrations using Node.js.",
      },
      {
        name: "React.js",
        icon: FaReact,
        work:
          "Created responsive interfaces with reusable components, hooks and optimized state management.",
      },
      {
        name: "Performance",
        icon: FaBolt,
        work:
          "Improved application performance by optimizing API calls, database queries and frontend rendering.",
      },
    ],

    highlights: [
      "Developed full-stack MERN applications following MVC architecture.",
      "Created REST APIs with Express.js and integrated them with React frontend.",
      "Implemented authentication, authorization and secure user workflows.",
      "Optimized MongoDB queries and improved backend response performance.",
      "Worked with reusable components and scalable project structures.",
    ],
  },
];



// ================= HOVER STYLE =================

const hoverSpring = {
  type: "spring",
  stiffness: 260,
  damping: 20,
  mass: 0.6,
};



// ================= TECH BADGE =================

const IconBadge = ({ Icon, label, onClick }) => (

  <motion.button

    onClick={onClick}

    whileHover={{
      scale: 1.08,
      backgroundColor: "#ffffff",
    }}

    whileTap={{
      scale:0.97
    }}

    transition={hoverSpring}

    className="
      flex items-center gap-3
      px-3 py-2
      rounded-xl
      bg-white/90
      text-black
      shadow
    "

  >

    <span
      className="
      w-7 h-7
      rounded-full
      bg-white
      flex items-center
      justify-center
      text-lg
      "
    >
      <Icon/>
    </span>


    <span className="hidden sm:block text-sm font-medium">
      {label}
    </span>


  </motion.button>

);



// ================= RIGHT SLIDE PANEL =================


const TechSlide = ({
  open,
  onClose,
  techName,
  work
}) => {


return (

<AnimatePresence>

{
open &&

<>


{/* Background */}

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

onClick={onClose}

className="
fixed inset-0
bg-black/50
z-40
"

/>



{/* Panel */}

<motion.aside

initial={{
x:"100%"
}}

animate={{
x:0
}}

exit={{
x:"100%"
}}

transition={{
duration:.4
}}

className="
fixed right-0 top-0
h-screen
w-full sm:w-[480px]
z-50
"

>


<div
className="
h-full
bg-gradient-to-b
from-black
via-[#0b1220]
to-black
border-l
border-white/10
p-6
overflow-auto
"
>


<div
className="
flex justify-between
items-center
mb-6
"
>


<div>

<h3 className="text-2xl font-bold">

{techName}

</h3>


<p className="text-gray-400 text-sm">

Technology contribution

</p>


</div>



<button

onClick={onClose}

className="
p-2
rounded-lg
bg-white/10
"

>

<FaTimes/>

</button>



</div>



<div
className="
p-4
rounded-xl
bg-white/5
border
border-white/10
"
>

<h4 className="font-semibold mb-3">

What I worked on

</h4>


<p className="text-gray-200 text-sm leading-relaxed">

{work}

</p>


</div>



<a

href="#contact"

className="
inline-flex
items-center
gap-2
mt-6
px-4
py-2
rounded-lg
bg-white
text-black
"

>

<FaPhoneAlt/>

Let's talk

</a>


</div>


</motion.aside>


</>

}

</AnimatePresence>

);

};
// ================= MAIN EXPERIENCE SECTION =================

export default function ExperienceSection() {


  // FIX:
  // Using unique id instead of index prevents multiple cards opening
  const [openCard, setOpenCard] = useState(null);


  const [slideOpen, setSlideOpen] = useState(false);


  const [selectedTech, setSelectedTech] = useState({
    name:"",
    work:""
  });



  // Open/Close internship card

  const toggleCard = (id)=>{

    setOpenCard(
      openCard === id ? null : id
    );

  };



  // Open technology panel

  const openTech = (tech)=>{

    setSelectedTech({
      name:tech.name,
      work:tech.work
    });

    setSlideOpen(true);

  };



  const closeSlide = ()=>{

    setSlideOpen(false);

  };




return (

<section

className="
min-h-screen
py-16
bg-gradient-to-b
from-[#020617]
via-[#070b12]
to-[#04060a]
text-white
"

>


<div
className="
max-w-6xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-extrabold
text-center
mb-8
"
>

Experience

</h2>



<p
className="
text-center
text-gray-300
max-w-2xl
mx-auto
mb-12
"
>

MERN Stack internships where I built scalable
frontend components, backend APIs, authentication,
optimization and production-ready features.

</p>





<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-8
"
>


{

experiences.map((exp)=>{


return (

<motion.article

key={exp.id}


initial={{
opacity:0,
y:20
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


whileHover={{
y:-5
}}


className="
rounded-2xl
p-6
bg-white/5
backdrop-blur
border
border-white/10
shadow-lg
"

>



{/* HEADER */}

<div

className="
flex
justify-between
gap-4
"

>


<div>


<p
className="
text-xs
uppercase
tracking-widest
text-gray-400
"
>

{exp.type}

</p>



<h3
className="
text-xl
font-bold
mt-2
"
>

{exp.company}

</h3>



<p
className="
text-sm
text-gray-400
mt-1
"
>

{exp.duration}

</p>


</div>





<button

onClick={()=>toggleCard(exp.id)}


className="
px-3
py-2
rounded-lg
bg-white/10
text-sm
"

>


{
openCard===exp.id
?
"Hide"
:
"View"
}


</button>



</div>






{/* TECH STACK */}

<div

className="
flex
flex-wrap
gap-3
mt-6
"

>


{

exp.techStack.map((tech)=>{


const Icon = tech.icon;


return (

<IconBadge

key={tech.name}

Icon={Icon}

label={tech.name}

onClick={()=>openTech(tech)}

/>


);


})

}


</div>







{/* EXPANDED DETAILS */}

<AnimatePresence>


{

openCard===exp.id &&

<motion.div


initial={{
opacity:0,
height:0
}}


animate={{
opacity:1,
height:"auto"
}}


exit={{
opacity:0,
height:0
}}


transition={{
duration:.35
}}


className="
overflow-hidden
"

>


<div

className="
mt-6
p-4
rounded-xl
bg-white/5
border
border-white/10
"

>


<h4
className="
font-semibold
mb-3
"
>

Key Highlights

</h4>



<ul

className="
list-disc
pl-5
space-y-2
text-sm
text-gray-200
"

>


{

exp.highlights.map((item,index)=>(


<li key={index}>

{item}

</li>


))

}



</ul>



<p

className="
text-xs
text-gray-400
mt-4
"

>

Click technology badges to see detailed contribution.

</p>



</div>


</motion.div>


}


</AnimatePresence>






</motion.article>


)


})


}


</div>


</div>






{/* TECHNOLOGY SLIDE */}

<TechSlide

open={slideOpen}

onClose={closeSlide}

techName={selectedTech.name}

work={selectedTech.work}

/>



</section>


);


}
