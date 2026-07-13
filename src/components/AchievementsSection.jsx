import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaAward,
  FaCertificate,
  FaCode,
  FaRocket,
  FaExternalLinkAlt,
} from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "1st Place – College Hackathon",
    description:
      "Developed a scalable MERN stack web application that stood out among competitors.",
    icon: FaTrophy,
    link: "https://drive.google.com/file/d/1evqfDME2HEjJC7XfarZ_nwg1AjG9I8M3/view?usp=drive_link",
    details: [
      "Full-stack development using MERN.",
      "Implemented authentication and CRUD operations.",
      "Deployed application on Vercel.",
    ],
  },
  {
    id: 2,
    title: "2nd Place – TechFest Debugging Competition",
    description:
      "Showcased strong debugging and problem-solving skills by solving complex issues.",
    icon: FaAward,
    link: "https://drive.google.com/drive/folders/1eryAsJIfv6lrzy4QydwIUyRW3aU_R_Ud",
    details: [
      "Debugged JavaScript and React issues.",
      "Optimized performance and fixed logical errors.",
    ],
  },
  {
    id: 3,
    title: "Backend Development Certification – IIT Kharagpur",
    description:
      "Built strong backend fundamentals with Node.js, Express.js and MongoDB.",
    icon: FaCertificate,
    link: "https://drive.google.com/drive/folders/1eryAsJIfv6lrzy4QydwIUyRW3aU_R_Ud",
    details: [
      "Designed REST APIs.",
      "Implemented secure authentication systems.",
    ],
  },
  {
    id: 4,
    title: "300+ LeetCode Problems Solved",
    description:
      "Consistently practicing DSA to improve algorithmic thinking.",
    icon: FaCode,
    link: "https://leetcode.com/u/Amarnath_sahni/",
    details: [
      "Solved Arrays, Strings, Linked Lists and Trees.",
      "Maintaining regular problem solving consistency.",
    ],
  },
  {
    id: 5,
    title: "Exploring AI for Full-Stack Development",
    description:
      "Building intelligent applications by combining AI with MERN stack.",
    icon: FaRocket,
    link: "https://github.com/Amarnath-sahni/ML-",
    details: [
      "Integrated AI features with React applications.",
      "Exploring intelligent backend solutions.",
    ],
  },
];

const AchievementsSection = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase">
            My <span className="text-yellow-400">Achievements</span>
          </h2>

          <div className="w-32 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"/>
        </motion.div>


        {/* Timeline */}

        <div className="relative">

          {/* Center line */}

          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-yellow-400/30"/>


          <div className="space-y-16">

            {achievements.map((item,index)=>{

              const Icon=item.icon;
              const isOpen=openId===item.id;

              return(

              <motion.div
              key={item.id}
              initial={{opacity:0,x:index%2===0?-80:80}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:.6}}
              viewport={{once:true}}
              className={`relative flex flex-col md:flex-row ${
                index%2===0
                ?"md:justify-start"
                :"md:justify-end"
              }`}
              >


                {/* Icon Circle */}

                <div className="
                absolute left-1/2 -translate-x-1/2 hidden md:flex
                w-14 h-14 rounded-full
                bg-yellow-400 text-black
                items-center justify-center
                text-2xl shadow-lg shadow-yellow-400/40
                border-4 border-black
                ">
                  <Icon/>
                </div>



                {/* Card */}

                <div className="
                md:w-[45%]
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-7
                hover:-translate-y-3
                transition-all duration-300
                hover:border-yellow-400/50
                shadow-xl
                ">


                  <div className="flex justify-between items-start gap-4">


                    <div>

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 mt-3">
                      {item.description}
                    </p>

                    </div>


                    <Icon className="text-yellow-400 text-3xl md:hidden"/>


                  </div>



                  {isOpen && (

                  <motion.div
                  initial={{height:0,opacity:0}}
                  animate={{height:"auto",opacity:1}}
                  className="mt-5 bg-black/40 rounded-xl p-4"
                  >

                    <ul className="list-disc pl-5 text-gray-300 space-y-2">

                    {
                    item.details.map((d,i)=>(
                      <li key={i}>{d}</li>
                    ))
                    }

                    </ul>

                  </motion.div>

                  )}



                  <div className="flex gap-3 mt-6">


                  <button
                  onClick={()=>setOpenId(isOpen?null:item.id)}
                  className="
                  px-4 py-2 rounded-xl
                  bg-yellow-400 text-black
                  font-semibold
                  hover:bg-yellow-300
                  "
                  >
                  {isOpen?"Hide":"Details"}
                  </button>



                  <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  px-4 py-2 rounded-xl
                  border border-yellow-400
                  text-yellow-400
                  flex items-center gap-2
                  hover:bg-yellow-400
                  hover:text-black
                  "
                  >
                  View <FaExternalLinkAlt/>
                  </a>


                  </div>



                </div>


              </motion.div>

              )

            })}

          </div>

        </div>


      </div>

    </section>
  );
};


export default AchievementsSection;
