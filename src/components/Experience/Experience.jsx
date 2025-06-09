import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the role I have taken in
          various organization
        </p>
      </div>
      {/* Experience TimeLine */}

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
        {/* Experience Entery */}
        {experiences.map((experiences, index) => (
          <div
            key={experiences.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experiences.img}
                alt={experiences.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
    ml-8 transform transition-transform duration-300 hover:scale-105 
    ${index % 2 === 0 ? "sm:ml-44 sm:mr-0" : "sm:ml-0 sm:mr-44"}`}
            
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img className="w-full h-full object-cover" src={experiences.img} alt={experiences.company} />
                </div>
                {/* Role compant name and date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{experiences.role}</h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{experiences.company}</h4>
                  </div>
                  {/* date */}
                  <p className="text-sm text-gray-500 mt-2">{experiences.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{experiences.desc}</p>
              <div>
                <h5 className="font-medium text-white ">Skills</h5>
                <ul className="flex flex-wrap mt-2">
                  {experiences.skills.map((skills,index)=>(
                    <li
                    key={index}
                    className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skills}
                    </li>
                  ))}
                </ul>
              </div>
           
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
