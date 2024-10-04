import React from 'react'
import react from '../../public/assets/react.png'
import c from '../../public/assets/C.png'
import cpp from '../../public/assets/cpp.png'
import fullstack from '../../public/assets/fullstack.png'
import python from '../../public/assets/python.png'
import node from '../../public/assets/node.png'

function Portfolio() {
    const openReact =() => {
        window.open("https://github.com/akashcn04/MyPortfolio","_blank");
    };
    const FullStack =() => {
        window.open("https://github.com/akashcn04/AAA-fitness-Website","_blank");
    };
    const openCpp =() =>{
        window.open("https://github.com/akashcn04/black-jack-cards-game","_blank");
    };
    const openCacheSimulator =() =>{
        window.open("https://github.com/akashcn04/Cache-Simulator","_blank");
    };
    const openCampusCompanion =() =>{
        window.open("https://github.com/akashcn04/CampusCompanion","_blank");
    };
    const openTravelForm =() =>{
        window.open("https://github.com/akashcn04/simple-travelform","_blank");
    };
  return (
    <div id='Portfolio'>
        <div className='max-w-[1320px] mx-auto mt-10 items-center' >
        <h1 className='text-2xl font-semibold text-black text-center md:text-left'>
        PortFolio
        </h1>
        <br />
        <h1 className='text-center md:text-left'>
            <u>Featured Projects</u>
        </h1>

        <div className='grid grid-rows-1 md:grid-cols-4 space-y-8 pt-4 justify-center md:'>
            <div className='mt-[32px] ml-[8px] pt-8 space-y-3 border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,255,0.8)] transition-shadow duration-[0.5s] w-[300px] flex flex-col justify-between'>
                <div>
                <img src={react} alt="" className='w-[100px] h-[100px] rounded-full border-slate-300 border-2 m-auto'/>
                <h1 className='text-center font-semibold text-xl pt-3'>React</h1>
                <p className='text-center pt-2'>Used mainly React library and little of others too.
                    its Front-End website
                </p>
                </div>
                <div className='grid place-items-center'>
                    <button className='bg-blue-500 text-white rounded-lg p-1 hover:tracking-wider hover:shadow-[0px_0px_10px_1px_black] duration-[0.5s]' onClick={openReact}>
                        Source-Code
                    </button>
                </div>
            </div>


            <div className='pt-8 space-y-3 border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,255,0.8)] transition-shadow duration-[0.5s]  w-[300px] flex flex-col justify-between'>
                <div>
                <img src={fullstack} alt="" className='w-[100px] h-[100px] rounded-full border-slate-300 border-2 m-auto'/>
                <h1 className='text-center font-semibold text-xl pt-3'>Full-Stack-1</h1>
                <p className='text-center pt-2'>Its a complete full-stack Resposive website,done as a group project.
                </p>
                </div>
                <div className='grid place-items-center'>
                    <button className='bg-blue-500 text-white rounded-lg p-1 hover:tracking-wider hover:shadow-[0px_0px_10px_1px_black] duration-[0.5s]' onClick={FullStack}>
                        Source-Code
                    </button>
                </div>
            </div>


            <div className='pt-8 space-y-3 border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,255,0.8)] transition-shadow duration-[0.5s] w-[300px]
            flex flex-col justify-between'>
                <div>
                <img src={cpp} alt="" className='w-[100px] h-[100px] rounded-full border-slate-300 border-2 m-auto'/>
                <h1 className='text-center font-semibold text-xl pt-3'>C++</h1>
                <p className='text-center pt-2'>
                    Simply constructed a Black Jack card name using DSA in CPP.
                </p>
                </div>
                <div className='grid place-items-center'>
                    <button className='bg-blue-500 text-white rounded-lg p-1 hover:tracking-wider hover:shadow-[0px_0px_10px_1px_black] duration-[0.5s]' onClick={openCpp}>
                        Source-Code
                    </button>
                </div>
            </div>


            <div className='pt-8 space-y-3 border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,255,0.8)] transition-shadow duration-[0.5s] w-[300px]
            flex flex-col justify-between'>
                <div>
                <img src={c} alt="" className='w-[100px] h-[100px] rounded-full border-slate-300 border-2 m-auto'/>
                <h1 className='text-center font-semibold text-xl pt-3'>C language</h1>
                <p className='text-center pt-2'>
                    its a cache simulator , showing how cache works in MPCA.
                </p>
                </div>
                <div className='grid place-items-center'>
                    <button className='bg-blue-500 text-white rounded-lg p-1 hover:tracking-wider hover:shadow-[0px_0px_10px_1px_black] duration-[0.5s]' onClick={openCacheSimulator}>
                        Source-Code
                    </button>
                </div>
            </div>

            <div className='pt-8 space-y-3 border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,255,0.8)] transition-shadow duration-[0.5s] w-[300px] flex flex-col justify-between'>
               <div>
               <img src={node} alt="" className='w-[100px] h-[100px] rounded-full border-slate-300 border-2 m-auto'/>
                <h1 className='text-center font-semibold text-xl pt-3'>Full-Stack-2</h1>
                <p className='text-center pt-2'>its also full stack website developed as practice project,using nodeJS,and more.
                </p>
               </div>
                <div className='grid place-items-center'>
                    <button className='bg-blue-500 text-white rounded-lg p-1 hover:tracking-wider hover:shadow-[0px_0px_10px_1px_black] duration-[0.5s]' onClick={openCampusCompanion}>
                        Source-Code
                    </button>
                </div>
            </div>


            <div className='pt-8 space-y-3 border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,255,0.8)] transition-shadow duration-[0.5s] w-[300px] flex flex-col justify-between'>
                <div>
                <img src={python} alt="" className='w-[100px] h-[100px] rounded-full border-slate-300 border-2 m-auto'/>
                <h1 className='text-center font-semibold text-xl pt-3'>Python</h1>
                <p className='text-center'>Its basically a simple travel form can be used by any agency to book any vehicle,contact using gui.[only frontend]
                </p>
                </div>
                <div className='grid place-items-center'>
                    <button className='bg-blue-500 text-white rounded-lg p-1 hover:tracking-wider hover:shadow-[0px_0px_10px_1px_black] duration-[0.5s]' onClick={openTravelForm}>
                        Source-Code
                    </button>
                </div>
            </div>
        </div>

        </div>
        <br />
        <hr />
    </div>
  )
}

export default Portfolio