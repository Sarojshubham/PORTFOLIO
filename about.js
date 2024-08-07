// src/pages/Home.jsx

import React from 'react';
import photo from "./desktop.jpeg";

export default function Home() {
  return (
    <>
    
      <section className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-2xl mb-8">Hi, I'm Shubbham Kumar Saroj - a passionate web developer</p>
        <a
          href="#about"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Learn More
        </a>
      </section>

      
      <section id="about" className="bg-gray-100 py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 mx-auto max-w-6xl">
          <div className=" w-full md:w-1/2 h-80 rounded-lg ">
             <img src={photo} className="w-96 h-96 rounded-lg ml-24 mb-18"></img>
            </div>
          <div className="flex flex-col justify-center md:w-1/2">
            <p className="text-xl leading-relaxed">
              Hello! I’m ,Shubbham Kumar Saroj, a  web developer with a knack for turning styles into reality, user-friendly  experiences.
              With a background in, I specialize in stylling through CSS as well as Tailwind, myself in development and web applications.
              My journey in development began with a fascination for how things work behind the scenes on the applications. Over time, this curiosity transformed into a full-fledged career.
            </p>
          </div>
        </div>
      </section>

 
      <section id="projects" className="py-16 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">My skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">HTML</h3>
            <p className="text-lg">A well familer with all the tags.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">CSS</h3>
            <p className="text-lg">Implementation of all the styllig</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">React</h3>
            <p className="text-lg">Good in the react frame work</p>
          </div>
        </div>
      </section>

        
    
    </>
  );
}
