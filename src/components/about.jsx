import React from 'react'
import Animation from './animation'
function about() {
    return (
        <div id='About'>
            <div className='max-w-[1320px] mx-auto mt-10 text-justify px-[18px] md:px-0 flex flex-col md:flex-row'>
                <div className='basis-[85%]'>
                <h1 className='text-2xl font-semibold text-black text-center md:text-start'>
                    About
                </h1>
                <p className='text-sm pt-4'>
                    As a passionate and enthusiastic student, I specialize in <b>frontend development</b> with a solid understanding of HTML, CSS, and JavaScript. I am also actively expanding my skills in backend development, driven by a strong desire to become a full-stack developer. My current focus is on mastering technologies like Node.js, databases, and API design, which will enable me to build comprehensive web applications from scratch.
                </p>
                <br />
                <h1 className='text-xl font-semibold text-green-500'>
                    Education and Grades
                </h1>
                 <ul className='list-disc space-y-2'>
                    <li>
                        I have done my primary schooling in <b>JNV Bagalkot</b>.
                    </li>
                    <li>
                        High School (SSLC) : <b>95.68%</b> 
                    </li>
                    <li>
                        PUC [PCMCs] : <b>95.83%</b>
                    </li>
                    <li>
                    I am currently pursuing a B.Tech degree in <b>Computer Science</b> at <b>PES University</b>.
                    <br />
                    <p>CGPA :<b> 8.69</b> [till 2nd year]</p>
                    </li>
                 </ul>

                <h1 className='text-xl font-semibold text-green-500 pt-7'>
                    Achivements
                </h1>
                <ul className='list-disc space-y-2'>
                    <li>
                        Selected For <b>regional level</b> Badminton Game While in JNV and Played <b>state level</b> while in PUC.
                    </li>
                    <li>
                         MRD Scholorship Awardee 2 times in PES University.
                    </li>
                 </ul>

                 <h1 className='text-xl font-semibold text-green-500 pt-7'>
                    Technical Skills
                </h1>
                <ul className='list-disc space-y-2'>
                    <li>
                        Languages : C, C++, Python, Html, JavaScript 
                    </li>
                    <li>
                         Libraries : Pytorch , Pandas ,mathplotlib , SciKit Learn , Keras
                    </li>
                    <li>
                        Tools : linux , Git
                    </li>
                    <li>
                        Database : MongoDB , Mysql
                    </li>
                    <li>
                        Backend : Nodejs , ExpressJs
                    </li>
                    <li>
                        Others : DataStructure and Algorithms
                    </li>
                 </ul>

                 <h1 className='text-xl font-semibold text-green-500 pt-7'>
                    Hobbies
                </h1>
                <ul className='list-disc space-y-2'>
                    <li>
                        Reading Newspapers
                    </li>
                    <li>
                    Enjoy playing the harmonium as a hobby, developing skills in music appreciation and creativity.
                    </li>
                    <li>
                        Badminton
                    </li>
                    <li>
                        Fitness
                    </li>
                    <li>
                        Video making and Editing
                    </li>
                 </ul>
                
                </div>
                
                <div className='basis-[15%] content-center'>
                 <>
                 <Animation />
                 </>
                </div>
            </div>
            <br />
                <hr />
        </div>
        
    )
}

export default about