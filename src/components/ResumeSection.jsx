import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";


const educationData = [
  {
    qualification: "Xth Standard",
    board: "BSEB (Bihar School Examination Board)",
    marks: "79%",
    icon: <FaSchool />,
    year: "2020",
    description:
      "Completed secondary education with a strong academic foundation."
  },

  {
    qualification: "XIIth Standard",
    board: "BSEB (Bihar School Examination Board)",
    marks: "71%",
    icon: <FaSchool />,
    year: "2022",
    description:
      "Completed higher secondary education with focus on science and technology."
  },

  {
    qualification: "Bachelor of Technology (B.Tech - Computer Science Engineering)",
    board: "IKG Punjab Technical University",
    marks: "84.17%",
    cgpa:"8.19 CGPA",
    icon: <FaUniversity />,
    year: "2022 - 2026",
    description:
      "Graduated in Computer Science Engineering with hands-on experience in MERN Stack development, AI projects, and problem solving."
  }
];



const ResumeSection = () => {


return (

<section className="
py-20
bg-gradient-to-b
from-black
via-gray-900
to-black
text-white
">


<div className="
max-w-6xl
mx-auto
px-6
">


<motion.h2

initial={{
opacity:0,
y:-30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
text-4xl
font-bold
text-center
mb-16
uppercase
tracking-wider
"

>

My Academic Journey

</motion.h2>





<div className="
relative
">


{/* Timeline Line */}

<div className="
absolute
left-5
top-0
bottom-0
w-1
bg-yellow-400/40
hidden
md:block
">
</div>





<div className="
space-y-10
">


{
educationData.map((edu,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.7,
delay:index*0.2
}}

className="
relative
md:ml-14
"


>



{/* Timeline Icon */}


<div className="
absolute
-md:-left-16
left-0
top-6
w-12
h-12
rounded-full
bg-yellow-400
text-black
flex
items-center
justify-center
text-xl
shadow-lg
">

{edu.icon}

</div>






<div className="
bg-white/5
backdrop-blur-md
border
border-white/10
rounded-3xl
p-7
shadow-xl
hover:scale-[1.02]
transition
duration-300
">


<div className="
flex
flex-wrap
justify-between
items-center
gap-3
">


<h3 className="
text-xl
md:text-2xl
font-bold
text-yellow-400
">

{edu.qualification}

</h3>



<span className="
bg-white/10
px-4
py-1
rounded-full
text-sm
text-gray-300
">

{edu.year}

</span>


</div>




<p className="
mt-3
text-gray-300
">

<span className="font-semibold">
University/Board:
</span>

{" "}{edu.board}

</p>





<p className="
mt-4
text-gray-400
leading-relaxed
">

{edu.description}

</p>






{/* Academic Score */}


<div className="
mt-6
">


<div className="
flex
justify-between
mb-2
text-sm
text-gray-300
">


<span>
Academic Score
</span>


<span className="
text-yellow-400
font-bold
">

{
edu.cgpa 
? edu.cgpa 
: edu.marks
}

</span>


</div>




<div className="
h-3
bg-gray-700
rounded-full
overflow-hidden
">


<motion.div

initial={{
width:0
}}

whileInView={{
width:
`${edu.cgpa ? 81.9 : parseFloat(edu.marks)}%`
}}

transition={{
duration:1.5,
ease:"easeOut"
}}

className="
h-full
bg-yellow-400
rounded-full
"

/>


</div>


</div>





{
edu.cgpa &&

<div className="
mt-5
inline-flex
items-center
gap-2
bg-yellow-400/10
border
border-yellow-400/30
px-4
py-2
rounded-xl
text-yellow-400
font-semibold
">


<FaGraduationCap/>

Overall CGPA: {edu.cgpa}


</div>

}



</div>


</motion.div>


))

}


</div>


</div>



</div>


</section>

)


};


export default ResumeSection;
