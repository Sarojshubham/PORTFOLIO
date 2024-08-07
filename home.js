/** @format */

// import Avatar from "./avatar.jpg";
// import Github from "./github.png";
// import Linkd from "./linkedin.png";

import { useEffect, useRef } from "react";
import image from "./avatar-svgrepo-com.svg"
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

export default function Home() {
	return (
		<div className="flex flex-col  h-screen w-full">
			{/* Navbar */}
			<nav className="flex items-center justify-between bg-blue-500 p-4">
				<h1 className="text-white text-xl font-bold">Portfolio</h1>
				<div className="flex gap-14 justify-center items-center text-2xl ">
					<a href="#home" className="text-white hover:text-gray-300">Home</a>
					<a href="#about" className="text-white hover:text-gray-300">About</a>
					<a href="#skills" className="text-white hover:text-gray-300">Skills</a>
					<a href="#projects" className="text-white hover:text-gray-300">Projects</a>
				</div>
			</nav>

			{/* Main Content */}
			<div className="flex flex-row  gap-20  justify-center items-center   w-full  h-screen ">
        <div className="flex flex-col gap-3 justify-center items-center mt-12 h-96 w-72">
          <h1  className="text-7xl font-bold">Shubbham Kumar Sraoj</h1>
         
          <h1 className="text-blue-500 text-5xl -ml-10 mt-1 font-semibold ">WEB Developer</h1>
   
          
          </div>
         <div className="h-96 w-96 rounded-full"><img src={image}></img></div>
			
      </div>
		</div>
	);
}
