'use client';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import gsap from 'gsap'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const logoRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(logoRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
            )
            gsap.fromTo(linksRef.current?.children,
                { y: -15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.08, delay: 0.1 }
            )
        })
        return () => ctx.revert()
    }, [])

  return (
    <nav className='bg-white py-6 px-12 flex items-center justify-between shadow-md
        w-full fixed top-0 z-20'>
        <Link ref={logoRef} href={'#hero'} className='font-bold text-xl hover:text-[#147efb] text-[#2d2e32] ease-in-out duration-500 opacity-0'>
            Alex.dev
        </Link>
        <AiOutlineMenu className='md:hidden block' size={'1.5rem'} onClick={() => setShowMenu(prev => !prev)} />
        <div ref={linksRef} className='hidden md:flex flex-row gap-4 font-semibold text-md'>
            <Link href={'#hero'} className='hover:text-[#147efb] text-[#2d2e32] ease-in-out duration-500 opacity-0'>Home</Link>
            <Link href={'#about'} className='hover:text-[#147efb] text-[#2d2e32] ease-in-out duration-500 opacity-0'>About</Link>
            <Link href={'#skills'} className='hover:text-[#147efb] text-[#2d2e32] ease-in-out duration-500 opacity-0'>Skills</Link>
            <Link href={'#projects'} className='hover:text-[#147efb] text-[#2d2e32] ease-in-out duration-500 opacity-0'>Projects</Link>
            <Link href={'#contact'} className='hover:text-[#147efb] text-[#2d2e32] ease-in-out duration-500 opacity-0'>Contact</Link>
        </div>
        {showMenu && (
            <ul className='md:hidden flex flex-col list-none bg-white w-fit
                    shadow-md p-6 absolute top-[4.6rem] right-0 border-t-2
                    gap-4 font-semibold text-md'>
                <Link href={'#hero'} onClick={() => setShowMenu(prev => !prev)} className='hover:text-[#147efb] ease-in-out duration-500'>Home</Link>
                <Link href={'#about'} onClick={() => setShowMenu(prev => !prev)} className='hover:text-[#147efb] ease-in-out duration-500'>About</Link>
                <Link href={'#skills'} onClick={() => setShowMenu(prev => !prev)} className='hover:text-[#147efb] ease-in-out duration-500'>Skills</Link>
                <Link href={'#projects'} onClick={() => setShowMenu(prev => !prev)} className='hover:text-[#147efb] ease-in-out duration-500'>Projects</Link>
                <Link href={'#contact'} onClick={() => setShowMenu(prev => !prev)} className='hover:text-[#147efb] ease-in-out duration-500'>Contact</Link>
            </ul>
        )}
    </nav>
  )
}

export default Navbar
