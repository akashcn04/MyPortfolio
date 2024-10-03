//in components we create those components which are used again and again , we need to define it once only here
import React from 'react'

function navbar() {
  return (
    // starting with react fragmentation <>    </>
    <>
    <section className='bg-[#c5aa6a] shadow-[0px_0px_15px_2px_black]'>
      <div className='max-w-[1320px] mx-auto'>
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
          <div>
          <ul className=' hidden md:flex gap-6 py-4'>
            <li className='hover:scale-[110%] duration-[0.5s]'>Home</li>
            <li className='hover:scale-[110%] duration-[0.5s]'>About</li>
            <li className='hover:scale-[110%] duration-[0.5s]'>Experiance</li>
            <li className='hover:scale-[110%] duration-[0.5s]'>Portfolio</li>
            <li className='hover:scale-[110%] duration-[0.5s]'>Contact</li> 
          </ul>
          </div>
        </div>
        <div>
            <ul className='md:hidden'>
            <li className='hover:scale-[110%] duration-[0.5s]'>Home</li>
            <li className='hover:scale-[110%] duration-[0.5s]'>About</li>
            <li className='hover:scale-[110%] duration-[0.5s]'>Experiance</li>
            <li className='hover:scale-[110%] duration-[0.5s]'>Portfolio</li>
            <li className='hover:scale-[110%] duration-[0.5s]'>Contact</li> 
            </ul>
          </div>
      </div>

    </section>
    </>
  )
}

export default navbar