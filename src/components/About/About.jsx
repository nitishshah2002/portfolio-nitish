import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/nitish.png"

const About = () => {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    setShowTyping(true); // Only render after component mounts (client-side)
  }, []);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
        {/* LEFT Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Hi , I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Nitish Kumar
          </h2>

          <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            {showTyping && (
              <span className="text-[#8245ec]">
                <Typewriter
                  words={[
                    "Web Developer",
                    "Frontend Developer",
                    "MERN Stack Developer",
                    "Full Stack Developer",
                    "Software Engineer",
                  ]}
                  loop={0} // 0 = infinite
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            )}
          </h3>
          {/* { About me parargraph} */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed">
            I am a passionate web developer with a keen interest in creating
            dynamic and responsive web applications. I have experience in
            building user-friendly interfaces and ensuring seamless user
            experiences. My goal is to leverage my skills in web development to
            contribute to innovative projects and continuously learn new
            technologies.
          </p>
          {/* Resume Button */}
          <a 
          href="https://drive.google.com/file/d/1gAKkKXt6nQ-CnFF6JYzFp-OT2MZDobJB/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full  mt-5 text-lg font-bold transition duration-300 scale=105 "
          style={{
            background: "linear-gradient(90deg, #8245ec,  0 0 40px #8245ec)",
          boxShadow:'0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',}}
          >
            Download Resume
          </a>
        </div>
        {/* Right side  */}
        <div className="md:w-1/2  flex justify-center md:justify-end">
     <Tilt className="w-48 h-48 sm:w-64 md:w-[30rem] md:h-[30rem] border-4 border-[#8245ec] rounded-full overflow-hidden flex items-center justify-center"
     tiltMaxAngleX={20}
     tiltMaxAngleY={20}
     perspective={1000}
     scale={1.05}
      transitionSpeed={1000}
      gyroscope={true}
     >
  <img
    src={profileImage}
    alt="Nitish Kumar"
    className="w-full h-full object-cover"
  />
</Tilt>


        </div>
      </div>
    </section>
  );
};

export default About;
