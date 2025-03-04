'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import Aos from 'aos';

const Project = ({
    project: {
         image, delay, title, github, liveDemo, description, technologies 
        }, nr
    }) => {
        useEffect(() => {
            Aos.init({duration:1200});
        });
  return (
    <article className='shadow w-full p-4 rounded-xl border '
    data-aos='zoom-out' data-aos-delay={delay-250}>
        <figure className={`flex flex-col md:flex-row ${nr%2 === 0 ? '' : 'md:flex-row-reverse'} gap-6 justify-between`}>
            <Image
                src={image}
                alt={title}
                height={310}
                width={310}
                className='rounded-xl w-[460px] h-[350px] shadow-md border bg-contain'
                data-aos='zoom-out' data-aos-delay={delay}
            />
            <figcaption className='flex flex-col items-center max-w-md mx-auto'>
                <header className='mt-4'> 
                    <h1 className='font-bold text-xl text-[#2d2e32]'
                    data-aos='zoom-in' data-aos-delay={delay}
                >{title}</h1>
                </header>
                <main className='flex flex-col items-center gap-2 my-auto '>
                    <p className='text-center '
                        data-aos='zoom-in' data-aos-delay={delay+200}
                    >{description}</p>
                    <div className='flex flex-wrap gap-2 items-center justify-center mt-2'>
                        {technologies.length > 0 && technologies.map((technology, index) => (
                            <h1 key={index} className='p-2 bg-white shadow font-semibold text-md'
                            data-aos='zoom-in' data-aos-delay={delay+index*100}
                            >{technology}</h1>
                        ))}
                    </div>
                </main>
                <footer className='flex flex-row items-baseline relative bottom-0 mt-4 md:mt-auto mb-2 gap-10 font-medium'>
                   {github != ''? <Link href={github} target='_blank'
                         className="flex flex-row items-center gap-2 hover:scale-y-110 hover:text-[#147efb] 
                            ease-in-out duration-500"
                            data-aos='zoom-in' data-aos-delay={delay+400}
                            >
                            Code
                            <AiFillGithub size={'1.5rem'}/>
                    </Link> : ''}
                    
                    <Link href={liveDemo} target='_blank'
                         className="flex flex-row items-center gap-2 hover:scale-y-110 hover:text-[#147efb]
                            ease-in-out duration-500"
                            data-aos='zoom-in' data-aos-delay={delay+450}
                            >
                            LiveDemo
                            <AiOutlineLink size={'1.5rem'}/>
                    </Link>
                </footer>
            </figcaption>
        </figure>
    </article>
  )
}

export default Project