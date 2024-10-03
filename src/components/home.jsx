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


function home() {
  return (
    <div className='max-w-[1320px] h-14 mx-auto my-[50px] md:my-[150px]'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='px-10 md:px-0 py-0 md:py-4 order-2 md:order-1 basis-[40%]'>
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
            olhwofnhfifj aiouefhbiuifjwebfij bsndfiubaifgnjrbguiir aufgiajbfijb bfibdcnjisbdfb ugfuigbu sbfbbfuiiwebfiubei wuegfoiqjhwirnq jdfdfyqweg qiuwgdf8qgwdf njhqwvdfgq qwyfvgqbw ijdby8qwdknqog ajksfgvi bwsajnsoiahdnd aousdbuisbdjansiduioasud qabwdiuassdnuiajbndbn obwdfa sod
          </p>
          <div className='flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 mt-2 pl-[20%] md:pl-0'>
            <div>
              <p>
                Available on
              </p>
              <div className='flex'>
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
              <p>
                Currently Working On
              </p>
              <div className='flex pl-0'>
                <a href="https://react.dev/" class="flex items-center">
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
          <img src="src/assets/coder.png" alt="" className=' w-[450px] h-[450px] mx-auto mr-[100px] ' />
        </div>

      </div>
    </div>
  )
}

export default home