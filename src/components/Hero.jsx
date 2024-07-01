'use client'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Hero = () => {

    useEffect(() => {
        Aos.init({duration:1200});
    });

    return (
        <section id='hero' className='bg-[#F9F9F9] h-[100vh] flex
                     items-center justify-center '>
            <div className="container">
                <div className='flex md:flex-row flex-col-reverse items-center 
                    justify-between gap-2 pr-9'>
                <div className='flex flex-col items-start justify-start 
                     gap-4' data-aos='fade-right'>
                    <div className='flex flex-col gap-5 mt-5'>
                        <div className='flex flex-row items-center max-w-[450px]'>

                            <h1 className='font-extrabold text-5xl text-[#2d2e32]'>
                                 Web Developer
                            </h1>
                            <Image
                                src="/hand.png" 
                                alt="hand"
                                height={60}
                                width={60}
                                className='m-0 p-0 '
                                />
                            </div>
                        
                        
                        <h3 className='max-w-[500px] font-medium text-lg text-[#555] font-mulish'>{`Hi, I'm Clocicov Alexandru, 
                                                A passionate Web Developer from Chisinau, Moldova📌`}</h3>
                    </div>
                    <div className='flex flex-col gap-4'>
                    <div className="flex flex-wrap gap-4">
                        <Link href={'https://www.linkedin.com/in/alexandru-clocicov/'}
                            target='_blank'
                            className="hover:scale-y-110 text-[#555] hover:text-[#147efb] ease-in-out duration-500">
                            
                            <AiFillLinkedin size={'2rem'}/>
                        </Link>
                        <Link href={'https://github.com/Lienkulet'}
                            target='_blank'
                            className="hover:scale-y-110 text-[#555] hover:text-[#147efb] ease-in-out duration-500">
                            <AiFillGithub size={'2rem'}/>
                        </Link>
                    </div>
                    <Link href={'#about'} className='text-[#2d2e32] border border-[#2d2e32] rounded-md outline-none
                                           py-2 flex flex-row items-center justify-center w-full
                                          hover:border-[#147efb]  hover:text-[#147efb] 
                                          ease-in-out duration-700'>
                            About Me
                        </Link>
                    </div>
                </div>
                <div className='rounded-full' data-aos='fade-left'>
                    <Image 
                        src={'/mee3.jpg'}
                        alt='Me'
                        height={300}
                        width={300}
                        className='rounded-full border-4 w-[350px] h-[350px] border-black mt-44 md:mt-0 bg-cover'
                    />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
