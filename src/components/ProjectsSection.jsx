import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


// ================= PROJECT DATA =================

const projects = [
  {
    title: "SmartExpense AI",
    category: "Full Stack + AI",

    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    ],

    description:
      "AI-powered expense management system that helps users track, analyze and optimize their financial activities.",

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Gemini AI",
      "Chart.js",
    ],

    features: [
      "AI based spending insights",
      "JWT authentication",
      "Interactive analytics dashboard",
      "Expense visualization",
      "Secure REST APIs",
    ],

    story:
      "Built a complete MERN financial management platform with AI integration for intelligent expense analysis and better budgeting decisions.",

    github:
      "https://github.com/Amarnath-sahni/Expense_Management_System-Backend-Frontend",

    live:
      "#",
  },


  {
    title: "AI Brain Tumor Detection System",
    category: "AI + Full Stack",

    images: [
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    ],

    description:
      "Deep learning based healthcare system that detects brain tumors from MRI images using AI models.",

    techStack: [
      "React.js",
      "Node.js",
      "Python",
      "TensorFlow",
      "CNN",
      "MongoDB",
      "Docker",
    ],

    features: [
      "MRI image upload",
      "AI prediction model",
      "Confidence score generation",
      "Patient report management",
      "Secure API communication",
    ],

    story:
      "Developed an AI healthcare platform by integrating a CNN deep learning model with a full-stack application for automated MRI analysis.",

    github:
      "https://github.com/Amarnath-sahni/Brain_tumor_AI",

    live:
      "#",
  },


  {
    title: "HomeStay Booking Platform",
    category: "Full Stack Web App",

    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6",
    ],

    description:
      "A hotel and home rental platform where users can list, search and book properties.",

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
    ],

    features: [
      "User authentication",
      "Property listing",
      "Reviews and ratings",
      "Booking management",
    ],

    story:
      "Created a scalable rental platform with authentication, property management and user review functionality.",

    github:
      "https://github.com/Amarnath-sahni/Hotel_Booking_System_adminPannel",

    live:
      "#",
  },


  {
    title: "IRCTC UI Redesign",
    category: "Frontend Project",

    images: [
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    ],

    description:
      "Modern redesign of IRCTC booking interface focusing on better user experience.",

    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Responsive Design",
    ],

    features: [
      "Modern UI",
      "Mobile responsive",
      "Reusable components",
      "Improved navigation",
    ],

    story:
      "Designed a clean and responsive train booking interface using reusable React components.",

    github:
      "https://github.com/Amarnath-sahni/IRTC",

    live:
      "#",
  },
];


// ================= PROJECT CARD =================


const ProjectCard = ({ project, index, openModal }) => {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:50
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        delay:index*0.15
      }}

      whileHover={{
        y:-10
      }}

      className="
      bg-white/10
      backdrop-blur-lg
      border
      border-white/20
      rounded-3xl
      overflow-hidden
      cursor-pointer
      shadow-xl
      "
      
      onClick={()=>openModal(project)}

    >


      {/* IMAGE */}

      <div className="h-52 overflow-hidden">

        <img

          src={project.images[0]}

          alt={project.title}

          className="
          w-full
          h-full
          object-cover
          hover:scale-110
          transition
          duration-500
          "

        />

      </div>



      <div className="p-5">


        <span
        className="
        text-xs
        bg-yellow-400
        text-black
        px-3
        py-1
        rounded-full
        "
        >

          {project.category}

        </span>



        <h3
        className="
        text-2xl
        font-bold
        text-yellow-400
        mt-4
        "
        >

          {project.title}

        </h3>



        <p
        className="
        text-gray-300
        mt-3
        line-clamp-3
        "
        >

          {project.description}

        </p>



        <div className="
        flex
        flex-wrap
        gap-2
        mt-4
        ">

        {
          project.techStack.slice(0,4).map((tech,i)=>(

            <span

            key={i}

            className="
            text-xs
            bg-black/70
            px-3
            py-1
            rounded-md
            "

            >

              {tech}

            </span>

          ))
        }

        </div>


        <button

        className="
        mt-5
        text-yellow-400
        font-semibold
        "

        >

          View Details →

        </button>


      </div>


    </motion.div>

  )

};



export default function ProjectsSection(){


 const [modalOpen,setModalOpen]=useState(false);

 const [selectedProject,setSelectedProject]=useState(null);



 const openModal=(project)=>{

    setSelectedProject(project);
    setModalOpen(true);

 }



 const closeModal=()=>{

    setModalOpen(false);
    setSelectedProject(null);

 }


 return (

<section className="
py-20
bg-[#020617]
text-white
min-h-screen
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-5xl
font-bold
text-center
mb-5
">

Projects

</h2>


<p className="
text-center
text-gray-300
mb-12
">

Explore my full-stack, AI and frontend projects

</p>



<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{
projects.map((project,index)=>(

<ProjectCard

key={index}

project={project}

index={index}

openModal={openModal}

/>

))

}


</div>

</div>

  
{/* ================= PROJECT MODAL ================= */}


<AnimatePresence>

{
modalOpen && selectedProject && (

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

className="
fixed
inset-0
bg-black/80
backdrop-blur-sm
flex
items-center
justify-center
z-50
p-5
"

>


<motion.div

initial={{
scale:0.8,
y:50
}}

animate={{
scale:1,
y:0
}}

exit={{
scale:0.8,
y:50
}}

className="
bg-[#0b1220]
border
border-white/20
rounded-3xl
max-w-4xl
w-full
max-h-[90vh]
overflow-y-auto
p-6
shadow-2xl
"

>



{/* HEADER */}


<div className="
flex
justify-between
items-center
mb-6
">


<div>


<span
className="
bg-yellow-400
text-black
text-xs
px-3
py-1
rounded-full
"
>

{selectedProject.category}

</span>



<h2 className="
text-3xl
md:text-4xl
font-bold
text-yellow-400
mt-3
">

{selectedProject.title}

</h2>


</div>



<button

onClick={closeModal}

className="
bg-white/10
p-3
rounded-full
hover:bg-white/20
"

>

<FaTimes/>

</button>


</div>





{/* IMAGE SLIDER */}


<Swiper

spaceBetween={20}

slidesPerView={1}

className="
rounded-2xl
mb-8
"

>


{
selectedProject.images.map((img,index)=>(

<SwiperSlide key={index}>


<img

src={img}

alt="project"

className="
w-full
h-72
object-cover
rounded-2xl
"

/>


</SwiperSlide>

))

}


</Swiper>





{/* DESCRIPTION */}


<div className="mb-6">


<h3 className="
text-xl
font-semibold
mb-2
">

About Project

</h3>



<p className="
text-gray-300
leading-relaxed
">

{selectedProject.description}

</p>


</div>





{/* TECH STACK */}



<div className="mb-6">


<h3 className="
text-xl
font-semibold
mb-3
">

Tech Stack

</h3>



<div className="
flex
flex-wrap
gap-3
">


{
selectedProject.techStack.map((tech,index)=>(


<span

key={index}

className="
bg-black/70
border
border-white/10
px-3
py-2
rounded-lg
text-sm
"

>

{tech}

</span>


))

}


</div>


</div>





{/* FEATURES */}


<div className="mb-6">


<h3 className="
text-xl
font-semibold
mb-3
">

Key Features

</h3>


<ul className="
space-y-2
text-gray-300
">


{
selectedProject.features.map((feature,index)=>(


<li

key={index}

className="
flex
gap-2
"

>

<span className="
text-yellow-400
">

✓

</span>


{feature}


</li>


))

}


</ul>


</div>





{/* PROJECT STORY */}



<div className="mb-8">


<h3 className="
text-xl
font-semibold
mb-3
">

Development Story

</h3>



<p className="
text-gray-300
leading-relaxed
">

{selectedProject.story}

</p>


</div>





{/* BUTTONS */}


<div className="
flex
flex-wrap
gap-4
">


<a

href={selectedProject.github}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-2
bg-white
text-black
px-5
py-3
rounded-xl
font-semibold
hover:scale-105
transition
"

>


<FaGithub/>

Github

</a>





<a

href={selectedProject.live}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-2
bg-yellow-400
text-black
px-5
py-3
rounded-xl
font-semibold
hover:scale-105
transition
"

>


<FaExternalLinkAlt/>

Live Demo


</a>


</div>



</motion.div>


</motion.div>


)

}

</AnimatePresence>



</section>

)

}

