'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const sectionRef = useRef(null)
    const imageRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(imageRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.65, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', toggleActions: 'play none none none' }
                }
            )
            gsap.fromTo(textRef.current?.children,
                { x: 40, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.12, delay: 0.1,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', toggleActions: 'play none none none' }
                }
            )
        })
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id='about' className='bg-white py-20'>
            <div className="container">
                <div className='flex md:flex-row flex-col-reverse gap-14 md:items-start items-center text-center'>
                    <Image
                        ref={imageRef}
                        src='/me2.jpg'
                        alt='me2'
                        height={150}
                        width={310}
                        className='rounded-xl w-[410px] h-[350px] bg-cover opacity-0'
                    />
                    <div ref={textRef} className='flex flex-col gap-3 max-w-lg'>
                        <h5 className='font-bold text-md text-[#147efb] opacity-0'>ABOUT ME</h5>
                        <h1 className='font-extrabold text-lg text-[#2d2e32] opacity-0'>A dedicated Web Developer</h1>
                        <p className='text-[#555] text-md opacity-0'>
                            I am Alex, a dedicated fitness enthusiast and proficient frontend developer. With a workout journey
                            spanning over two years, I have cultivated a meticulous attention to detail. In my free time,
                            I enjoy listening to music, a lifelong passion that aids in my concentration and serves
                            as a constant source of motivation in my professional pursuits.
                        </p>
                        <p className='text-[#555] text-md opacity-0'>
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
