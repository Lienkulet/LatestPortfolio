'use client'
import React, { useEffect, useRef } from 'react'
import Project from './Project'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = headerRef.current?.children
      if (children) {
        gsap.fromTo(children,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15,
            scrollTrigger: { trigger: headerRef.current, start: 'top 90%', toggleActions: 'play none none none' }
          }
        )
      }
    })
    return () => ctx.revert()
  }, [])

  const projects = [
    //  {
    //   title: 'Moldinconbank🏦',
    //   image: '/PremierImobil.png',
    //   github: '',
    //   liveDemo: 'https://premierimobil.md/ro',
    //   description: 'Built dynamic pages for personal loan and mortgage services for Moldinconbank, a major commercial bank in Moldova, using modern web technologies.',
    //   technologies: ['React', 'NextJs']
    // },
    {
      title: 'Playgram AI',
      image: '/playgram.png',
      github: '',
      liveDemo: 'https://playgram.ai/',
      description: `Landing SaaS for an AI-powered team collaboration platform, providing access to multiple language models in one workspace with shared memory to streamline workflows and enhance productivity.`,
      technologies: ['React', 'NextJs', 'Tailwind Css']
    },
    {
      title: 'INC COFFEE ROASTERS',
      image: '/inccoffeeroasters.png',
      github: '',
      liveDemo: 'https://www.inccoffeeroasters.com/',
      description: `Website for a mission-driven coffee roastery and café, offering freshly roasted specialty coffee while promoting inclusivity through meaningful employment opportunities for individuals of all abilities.`,
      technologies: ['React', 'NextJs']
    },
    {
      title: 'Comoara Stupului🍯',
      image: '/ComoaraStupului.png',
      github: '',
      liveDemo: 'https://comoarastupului.netlify.app/',
      // liveDemo: 'https://comoarastupului.com/',
      description: `Website for a local honey brand showcasing natural bee products and offering raw, minimally processed honey and other hive-based goods.`,
      technologies: ['React', 'NextJs', 'MongoDb']
    },
    {
      title: 'SummAize📝',
      image: '/SummAize.jpeg',
      github: 'https://github.com/Lienkulet/SummAIze',
      liveDemo: 'https://summaizegpt.netlify.app/',
      description: 'Article summarizer, offering fast and accurate summaries of newspages and much more! Save time and get to the key points with ease, all in just a few clicks.',
      technologies: ['NextJS', 'Tailwind CSS']
    },
    {
      title: 'CebanBarber💈',
      image: '/cebanbarber.png',
      github: '',
      liveDemo: 'https://www.cebanbarber.com/',
      description: `Website for a local barber shop, offering expert grooming services to help you look and feel your best.`,
      technologies: ['React', 'NextJs', 'Tailwind Css']
    },
    {
      title: 'VetMaxiTeh💊',
      image: '/VetMaxiTeh.png',
      github: '',
      liveDemo: 'https://vetmaxiteh.com/',
      description: `Website for a local veterinary products platform dedicated to supporting animal health and wellbeing.`,
      technologies: ['React', 'NextJs', 'NextAuth', 'MongoDb', 'Tailwind Css']
    },
    {
      title: 'Kedco Electronics💻',
      image: '/Kedco-Electronics.webp',
      github: 'https://github.com/Lienkulet/KEDCO-Electronics',
      liveDemo: 'https://kedco-electronics.vercel.app/',
      description: `Ecommerce website for electronic products, featuring a wide range of items like smartphones, laptops, and accessories with detailed descriptions, flexible payment options, and multiple shipping methods.`,
      technologies: ['React', 'NextJs', 'Sanity']
    },
    {
      title: 'Liedko📱',
      image: '/Liedko.webp',
      github: 'https://github.com/Lienkulet/Liedko',
      liveDemo: 'https://liedko.vercel.app/',
      description: `Ecommerce platform for electronic devices, offering a wide product selection with advanced search and filtering, customer reviews, wishlist management, secure checkout, and exclusive discounts through coupons.`,
      technologies: ['React', 'NextJs', 'Styled Components', 'MongoDb']
    },
    {
      title: 'Grilli Bites🍝',
      image: '/Grilli2.png',
      github: 'https://github.com/Lienkulet/Grilli',
      liveDemo: 'https://grillweb.netlify.app/',
      description: 'Restaurant landing page, serving delicious, freshly prepared meals in a cozy atmosphere. Enjoy a unique dining experience with dishes crafted to satisfy every taste.',
      technologies: ['React', 'NextJs', 'Tailwind Css']
    },

    //  {
    //   title: 'Premier Imobil🏡',
    //   image: '/PremierImobil.png',
    //   github: '',
    //   liveDemo: 'https://premierimobil.md/ro',
    //   description: 'Website for a local real estate agency, offering expert services in buying, selling, and renting properties.',
    //   technologies: ['React', 'NextJs', 'Tailwind Css', 'MongoDb']
    // },
    // {
    //   title: 'SDGroup🧱',
    //   image: '/SDGroup.png',
    //   github: '',
    //   liveDemo: 'https://sdgroup.md/',
    //   description: `Website for a local company specialized in apartment and office repairs, top-notch services to meet unique needs. From minor fixes to major renovations.`,
    //   technologies: ['Html', 'Css', 'Javascript']
    // },

  ]

  return (
    <section id='projects' className='bg-white py-20'>
      <div className='container'>
        <header ref={headerRef} className='flex flex-col mb-10 gap-2 md:text-start text-center'>
          <h2 className='text-[#147efb] font-bold text-xl opacity-0'>Projects</h2>
          <h3 className='font-bold text-xl opacity-0'>Each project is a unique 🧩 of development</h3>
        </header>
        <main className='flex flex-col items-center gap-6'>
          {projects.map((project, index) => (
            <Project key={index} project={project} nr={index} />
          ))}
        </main>
      </div>
    </section>
  )
}

export default Projects
