import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function footer() {
    return (
        <div>
            <div className='max-w-[350px] h-[150px] mx-auto pt-12'>
            <div className='flex space-x-2 justify-center'>
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
              <br />
              <hr className='h-[2px] bg-black'/>
              <div className='pt-4 text-center space-y-2'>
                <p className='text-sm font-semibold'>
                    &copy; 2024 My Portfolio, All rights reserved.
                </p>
                <p className='text-sm'>
                    Just Kidding.
                </p>
              </div>
            </div>

        </div>
    )
}

export default footer