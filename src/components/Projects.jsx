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
      title: 'Premier Imobil🏡',
      delay:300,
      image: '/PremierImobil.png',
      github: '',
      liveDemo: 'https://premierimobil.md/ro',
      description: 'Website for a local real estate agency, offering expert services in buying, selling, and renting properties.',
      technologies: ['React', 'NextJs', 'Tailwind Css', 'MongoDb']
    },
    {
      title: 'Comoara Stupului🍯',
      delay:300,
      image: '/ComoaraStupului.png',
      github: 'https://github.com/Lienkulet/ComoaraStupului',
      liveDemo: 'https://comoarastupului.com/',
      description: `Streamlined e-commerce platform inviting you to indulge in the purity of honey, anytime, anywhere. Website created for the Tekwill 2024 competition and exhibition and included in their book`,
      technologies: ['Html', 'Css', 'Javascript']
    },
    {
      title: 'SDGroup🧱',
      delay:300,
      image: '/SDGroup.png',
      github: '',
      liveDemo: 'https://sdgroup.md/',
      description: `Website for a local company specialized in apartment and office repairs, top-notch services to meet unique needs. From minor fixes to major renovations.`,
      technologies: ['Html', 'Css', 'Javascript']
    },
    {
      title: 'Liedko📱',
      delay:300,
      image: '/Liedko.webp',
      github: 'https://github.com/Lienkulet/Liedko',
      liveDemo: 'https://liedko.vercel.app/',
      description: 'Experience hassle-free electronic device shopping. Discover a wide range of products, utilize search and filtering options, read reviews, and enjoy a seamless checkout process. Manage orders, create a wishlist, and take advantage of coupons for added savings.',
      technologies: ['React', 'NextJs', 'Styled Components', 'MongoDb']
    },
    {
      title: 'Grilli Bites🍝',
      delay:300,
      image: '/Grilli2.png',
      github: 'https://github.com/Lienkulet/Grilli',
      liveDemo: 'https://grillweb.netlify.app/',
      description: 'Restaurant landing page, serving delicious, freshly prepared meals in a cozy atmosphere. Enjoy a unique dining experience with dishes crafted to satisfy every taste.',
      technologies: ['React', 'NextJs', 'Tailwind Css']
    },
    {
      title: 'SummAize📝',
      delay:300,
      image: '/SummAize.jpeg',
      github: 'https://github.com/Lienkulet/SummAIze',
      liveDemo: 'https://summaizegpt.netlify.app/',
      description: 'Article summarizer, offering fast and accurate summaries of newspages and much more! Save time and get to the key points with ease, all in just a few clicks.',
      technologies: ['NextJS', 'Tailwind CSS']
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