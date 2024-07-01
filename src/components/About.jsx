'use client'
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({duration:1200});
});
  return (
    <section id='about' className='bg-white py-20'>
        <div className="container" data-aos="fade-up">
            <div className='flex md:flex-row flex-col-reverse gap-14 md:items-start items-center text-center'>
            <Image 
                src='/me2.jpg'
                alt='me2'
                height={150}
                width={310}
                className='rounded-xl w-[410px] h-[350px] bg-cover'
                data-aos='fade-up'
                />
                <div className='flex flex-col gap-3 max-w-lg'>
                    <h5 className='font-bold text-md text-[#147efb]' data-aos='fade-left'>ABOUT ME</h5>
                    <h1 className='font-extrabold text-lg text-[#2d2e32]' data-aos='fade-left' data-aos-delay="250">A dedicated Web Developer</h1>
                    <p className='text-[#555] text-md' data-aos='fade-left' data-aos-delay="500">
                    I am Alex, a dedicated fitness enthusiast and proficient frontend developer. With a workout journey 
                    spanning over two years, I have cultivated a meticulous attention to detail. In my free time, 
                    I enjoy listening to music, a lifelong passion that aids in my concentration and serves 
                    as a constant source of motivation in my professional pursuits.
                    </p>
                    <p className='text-[#555] text-md' data-aos='fade-left' data-aos-delay="700">
                     I initially started coding as a hobby, but soon I discovered an undeniable passion that urged me to transform it into a career. 
                     I am a quick learner and comfortable working with both frontend and backend technologies with popular frameworks like React, Angular,
                     and NextJs and I have a strong foundation in database management with systems like MongoDB and MySQL
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About