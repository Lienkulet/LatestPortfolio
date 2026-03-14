'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Project = ({
    project: {
         image, title, github, liveDemo, description, technologies
        }, nr
    }) => {
    const cardRef = useRef(null)
    const imageRef = useRef(null)
    const captionRef = useRef(null)

    useEffect(() => {
        const isEven = nr % 2 === 0
        const ctx = gsap.context(() => {
            gsap.fromTo(cardRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.55, ease: 'power3.out',
                    scrollTrigger: { trigger: cardRef.current, start: 'top bottom', toggleActions: 'play none none none' }
                }
            )
            gsap.fromTo(imageRef.current,
                { x: isEven ? -40 : 40, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.08,
                    scrollTrigger: { trigger: cardRef.current, start: 'top bottom', toggleActions: 'play none none none' }
                }
            )
            gsap.fromTo(captionRef.current,
                { y: 25, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', delay: 0.18,
                    scrollTrigger: { trigger: cardRef.current, start: 'top bottom', toggleActions: 'play none none none' }
                }
            )
        })
        return () => ctx.revert()
    }, [nr])

  return (
    <article ref={cardRef} className='shadow w-full p-4 rounded-xl border opacity-0'>
        <figure className={`flex flex-col md:flex-row ${nr%2 === 0 ? '' : 'md:flex-row-reverse'} gap-6 justify-between`}>
            <Image
                ref={imageRef}
                src={image}
                alt={title}
                height={350}
                width={460}
                className='rounded-xl w-full md:w-[460px] shadow-md border'
            />
            <figcaption ref={captionRef} className='flex flex-col items-center max-w-md mx-auto'>
                <header className='mt-4'>
                    <h1 className='font-bold text-xl text-[#2d2e32]'>{title}</h1>
                </header>
                <main className='flex flex-col items-center gap-2 my-auto '>
                    <p className='text-center '>{description}</p>
                    <div className='flex flex-wrap gap-2 items-center justify-center mt-2'>
                        {technologies.length > 0 && technologies.map((technology, index) => (
                            <h1 key={index} className='p-2 bg-white shadow font-semibold text-md'>{technology}</h1>
                        ))}
                    </div>
                </main>
                <footer className='flex flex-row items-baseline relative bottom-0 mt-4 md:mt-auto mb-2 gap-10 font-medium'>
                   {github != ''? <Link href={github} target='_blank'
                         className="flex flex-row items-center gap-2 hover:scale-y-110 hover:text-[#147efb]
                            ease-in-out duration-500">
                            Code
                            <AiFillGithub size={'1.5rem'}/>
                    </Link> : ''}

                    <Link href={liveDemo} target='_blank'
                         className="flex flex-row items-center gap-2 hover:scale-y-110 hover:text-[#147efb]
                            ease-in-out duration-500">
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
