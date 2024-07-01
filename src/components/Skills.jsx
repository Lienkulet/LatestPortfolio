'use client'
import React, { useEffect } from 'react'
import Skill from './Skill'
import Aos from 'aos';

const Skills = () => {
    useEffect(() => {
        Aos.init({duration:1200});
    });
    const skills = [
        {
            name: "Front-end",
            delay: 200,
            technologies: [ "NextJs" , "React", "Javascript", "Angular", "HTML" ]
        },
        {
            name: "Styling",
            delay: 300,
            technologies: [ "Tailwind" , "CSS", "Bootstrap", "Styled Components"]
        },
        {
            name: "Databases",
            delay: 400,
            technologies: [ "MongoDb" , "MsSql", "MySql"]
        },
        {
            name: "Back-end",
            delay: 500,
            technologies: ["NodeJs", "Typescript", "Express" ]
        },
    ];
    return (
        <section id='skills' className='bg-[#F9F9F9] py-20'>
            <div className='container'>
                <header className='mb-10 md:text-start text-center'>
                    <h1 className='text-[#147efb] font-bold text-xl' data-aos='fade-right'>My Skills</h1>
                </header>
                <div className='flex md:flex-row flex-col items-center justify-between gap-2'>
                {
                  skills.length > 0 && skills.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                    ))
                  } 
                 </div>
              </div>
        </section>
    )
}

export default Skills

