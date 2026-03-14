'use client'
import React, { useEffect, useRef } from 'react'
import Skill from './Skill'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const cardsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { x: -30, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.55, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', toggleActions: 'play none none none' }
                }
            )
            gsap.fromTo(cardsRef.current?.children,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: 0.1, delay: 0.1,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', toggleActions: 'play none none none' }
                }
            )
        })
        return () => ctx.revert()
    }, [])

    const skills = [
        { name: "Front-end", technologies: ["NextJs", "React", "Javascript", "HTML"] },
        { name: "Styling", technologies: ["Tailwind", "CSS", "Bootstrap", "Styled Components"] },
        { name: "Databases", technologies: ["MongoDb", "MsSql", "MySql"] },
        { name: "Back-end", technologies: ["NodeJs", "Typescript", "Express"] },
    ]

    return (
        <section ref={sectionRef} id='skills' className='bg-[#F9F9F9] py-20'>
            <div className='container'>
                <header className='mb-10 md:text-start text-center'>
                    <h1 ref={headerRef} className='text-[#147efb] font-bold text-xl opacity-0'>My Skills</h1>
                </header>
                <div ref={cardsRef} className='flex md:flex-row flex-col items-center justify-between gap-2'>
                    {skills.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
