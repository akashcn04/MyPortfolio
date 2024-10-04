import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TbBrandNodejs } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { DiHtml5 } from "react-icons/di";

import { ReactTyped } from "react-typed";
import coder from '../../public/assets/coder.png'


function home() {
  return (
    <>
    <div
    id='Home' 
    className='max-w-[1320px] mx-auto my-[50px] md:mt-[150px]'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='px-10 md:px-0 py-0 md:py-2 order-2 md:order-1 basis-[40%]'>
          <p className='text-xl pt-4 md:pt-12'>
            Welcome In My Feed. 

          </p>
          <h1 className='text-3xl py-3'>
            Hello, I'm a &nbsp;
            {/* <span className='text-red-600'>Developer..</span> */}
            <ReactTyped className='text-red-600 font-semibold'
              strings={["Developer", "Coder", "Programmer"]}
              typeSpeed={70}
              loop={true}
            />
          </h1>
          <p className='py-3 text-sm md:text-md text-justify'>
            Welcome to My web-page , i have created this complete <b>frontend</b> website and little-bit of <b>backend</b> work
            for myself as practice project and i used <i>react</i> , <i>JavaScript</i> , <i>tailwindcss</i> and <i>Html</i> in my website development, hope You like it,Just scroll down to Know about me.
          </p>
          <div className='flex flex-col items-center md:flex-row justify-between space-y-5 md:space-y-0 mt-2'>
            <div>
              <p className='ml-3 md:ml-0 text-center md:text-left'>
                Available on
              </p>
              <div className='flex space-x-2'>
                <a href="https://www.linkedin.com/in/akash-nyamagoud-2073b9260/">
                  <FaLinkedin className='text-xl md:text:2xl mt-2 hover:scale-[150%] duration-[0.5s]' />
                </a>
                <a href="https://www.github.com/akashcn04">
                  <FaGithub className='text-xl md:text:2xl mt-2 ml-2 hover:scale-[150%] duration-[0.5s]' />
                </a>
                <a href="https://leetcode.com/u/akashcn04/">
                  <SiLeetcode className='text-xl md:text:2xl mt-2 ml-2 hover:scale-[150%] duration-[0.5s]' />
                </a>
                <a href="https://www.youtube.com/@akashcn1">
                  <BsYoutube className='text-xl md:text:2xl mt-2 ml-2 hover:scale-[150%] duration-[0.5s]' />
                </a>
                <a href="https://www.instagram.com/passion_ediitz/">
                  <BsInstagram className='text-xl md:text:2xl mt-2 ml-2 hover:scale-[150%] duration-[0.5s]' />
                </a>

              </div>
            </div>
            <div >
              <p text-center>
                Currently Working On
              </p>
              <div className='flex ml-1 md:ml-0 space-x-2'>
                <a href="https://react.dev/">
                  <SiReact className='text-xl md:text:2xl mt-2 hover:scale-[150%] duration-[0.5s]' />
                </a>
                <a href="https://nodejs.org/en">
                  <TbBrandNodejs className='text-xl md:text:2xl mt-2 ml-2 hover:scale-[150%] duration-[0.5s]' />
                </a>
                <a href="https://tailwindcss.com/">
                  <SiTailwindcss className='text-xl md:text:2xl mt-2 ml-2 hover:scale-[150%] duration-[0.5s]' />
                </a>
                <a href="https://www.mysql.com/">
                  <TbBrandMysql className='text-xl md:text:2xl mt-2 ml-2 hover:scale-[150%] duration-[0.5s]' />
                </a>
                <a href="https://html.com/">
                  <DiHtml5 className='text-xl md:text:2xl mt-2 ml-2 hover:scale-[150%] duration-[0.5s]' />
                </a>

              </div>
            </div>

          </div>
        </div>
        <div className='order-1 md:order-2 basis-[60%]'>
          <img src={coder} alt="" className=' w-[450px] h-[450px] mx-auto mr-[100px] rounded-full bg-slate-300' />
        </div>
      </div>
    </div>
    <hr/>
    </>
  );
}

export default home