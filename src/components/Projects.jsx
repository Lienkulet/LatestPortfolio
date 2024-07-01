'use client'
import React, { useEffect } from 'react'
import Project from './Project'
import Aos from 'aos';

const Projects = () => {
  // image, title, github, liveDemo, description, technologies 

  useEffect(() => {
    Aos.init({duration:1200});
});

  const projects = [
    {
      title: 'Kedco Electronics💻',
      delay:250,
      image: '/Kedco-Electronics.webp',
      github: 'https://github.com/Lienkulet/KEDCO-Electronics',
      liveDemo: 'https://kedco-electronics.vercel.app/',
      description: 'A website that offers a wide range of electronic products with a detailed description for purchase such as smartphones, laptops, headphones, and more. The website offers various payment options and shipping methods.',
      technologies: ['React', 'NextJs', 'Sanity']
    },
    {
      title: 'SDGroup🧱',
      delay:300,
      image: '/SDGroup.png',
      github: 'https://github.com/Lienkulet/SDGroup',
      liveDemo: 'https://kedco-electronics.vercel.app/',
      description: `Transform your spaces with SDGroup. Specializing in apartment and office repairs, we deliver top-notch services to meet your unique needs. From minor fixes to major renovations, our skilled team ensures a seamless and stress-free experience. Trust SDGroup to enhance the functionality and aesthetics of your property, creating a space you'll love.`,
      technologies: ['Html', 'Css', 'Javascript']
    },
    {
      title: 'Liedko',
      delay:300,
      image: '/Liedko.webp',
      github: 'https://github.com/Lienkulet/Liedko',
      liveDemo: 'https://liedko.vercel.app/',
      description: 'Experience hassle-free electronic device shopping. Discover a wide range of products, utilize search and filtering options, read reviews, and enjoy a seamless checkout process. Manage orders, create a wishlist, and take advantage of coupons for added savings.',
      technologies: ['React', 'NextJs', 'Styled Components', 'MongoDb']
    },
    {
      title: 'Comoara Stupului',
      delay:300,
      image: '/ComoaraStupului.png',
      github: 'https://github.com/Lienkulet/ComoaraStupului',
      liveDemo: 'https://kedco-electronics.vercel.app/',
      description: `Explore the sweet essence of nature with 'Comoara Stupului', where our extensive selection of honey products meets every palate's needs. Our streamlined e-commerce platform guarantees a hassle-free shopping journey, inviting you to indulge in the purity of honey, anytime, anywhere.`,
      technologies: ['Html', 'Css', 'Javascript']
    },
    {
      title: 'DeliverXpress🚗',
      delay:300,
      image: '/DeliverXpress.webp',
      github: 'https://github.com/Lienkulet/DeliverXpress',
      liveDemo: 'https://deliver-xpress.vercel.app/',
      description: 'Discover a new level of convenience and freedom from compact cars to spacious SUVs, our diverse fleet caters to your unique needs, while our seamless booking process ensures a stress-free experience. Get ready to hit the road and create unforgettable memories.',
      technologies: ['React', 'Typescript', 'Tailwind Css', `RapidApi's`]
    },
    {
      title: 'Expressive Mind🌐',
      delay:300,
      image: '/Expressive-Mind.webp',
      github: 'https://github.com/Lienkulet/Expressive-Mind',
      liveDemo: 'https://expressive-mind.vercel.app/',
      description: 'The perfect platform for expressing your thoughts and ideas online through insightful articles, personal anecdotes, and engaging discussions.',
      technologies: ['React', 'NextJs', 'Tailwind Css', 'MongoDb']
    },
  ]
  return (
    <section id='projects' className='bg-white py-20'>
      <div className='container'>
        <header className='flex flex-col mb-10 gap-2 md:text-start text-center'>
          <h1 className='text-[#147efb] font-bold text-xl' data-aos='fade-right'>Projects</h1>
          <h1 className='font-bold text-xl' data-aos='fade-right' data-aos-delay={150}>Each project is a unique 🧩 of development</h1>
        </header>
        <main className='flex flex-col items-center gap-6'>
          {
            projects.length > 0 && projects.map((project, index) => (
              <Project key={index} project={project} nr={index} />
            ))
          }
        </main>
      </div>
    </section>
  )
}

export default Projects