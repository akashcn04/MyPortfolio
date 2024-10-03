//in components we create those components which are used again and again , we need to define it once only here
import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


function navbar() {
  const [menu, setmenu] = useState(false);          //remenber function syntax to create a condition
  return (
    // starting with react fragmentation <>    </>
    <>
      <section className='bg-[#c5aa6a] md:shadow-[0px_0px_15px_2px_black] shadow-[0px_0px_15px_2px_blue]  h-14 fixed left-0 top-0 right-0'>
        <div className='max-w-[1320px] h-14 mx-auto'>
          <div className='flex justify-between'>
            <div className='flex gap-3'>
              <div>
                <img className='w-[60px] h-[60px]' src="src/assets/coder.png" alt="" />
              </div>
              <div className='py-[5px]'>
                <h1 className='text-xl font-semibold cursor-pointer'>Akas<span className='text-red-600 text-xl'>h</span>..</h1>
                <p className='text-sm font-semibold'>Software Engineer</p>
              </div>
            </div>
            {/* navbar for desktop */}
            <div>
              <ul className=' hidden md:flex gap-6 py-4'>
                <li className='hover:scale-[110%] duration-[0.5s]'>Home</li>
                <li className='hover:scale-[110%] duration-[0.5s]'>About</li>
                <li className='hover:scale-[110%] duration-[0.5s]'>Experiance</li>
                <li className='hover:scale-[110%] duration-[0.5s]'>Portfolio</li>
                <li className='hover:scale-[110%] duration-[0.5s]'>Contact</li>
              </ul>

              <ul className='md:hidden'>
                <div onClick={() => setmenu(!menu)} className='py-5 pr-4 relative'>
                  {menu ? <IoMdClose size={20}/> : <CiMenuBurger size={20}/>}
                </div>
              </ul>
            </div>
          </div>

          {/* navbar for mobile */}

{
   menu &&               //remember
   (
     <div className='md:hidden flex flex-col items-center justify-center h-screen bg-slate-300'>
             <ul className='md:hidden'>
               <li className='hover:scale-[110%] duration-[0.5s] py-3 font-semibold'>Home</li>
               <li className='hover:scale-[110%] duration-[0.5s] py-3 font-semibold'>About</li>
               <li className='hover:scale-[110%] duration-[0.5s] py-3 font-semibold'>Experiance</li>
               <li className='hover:scale-[110%] duration-[0.5s] py-3 font-semibold'>Portfolio</li>
               <li className='hover:scale-[110%] duration-[0.5s] py-3 font-semibold'>Contact</li>
             </ul>
           </div>
   )
}
         
        </div>
      </section>
    </>
  )
}

export default navbar