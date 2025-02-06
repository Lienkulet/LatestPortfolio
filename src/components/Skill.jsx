'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'

const Skill = ({skill: {name, delay, technologies}}) => {
  const wi = name === 'Styling'? 100 : 150;

  useEffect(() => {
    Aos.init({duration:1200});
});
  return (
    <article className='flex flex-col items-center bg-white w-full md:w-[230px] h-[280px] rounded-lg shadow  p-2'
    data-aos='zoom-out' data-aos-delay={delay-250}
    >
      <header className='flex flex-col items-center border-b w-full p-2 gap-2'>
        <h1 className='font-semibold text-lg ' data-aos='zoom-in' data-aos-delay={delay}>{name}</h1>
        </header>
        <main className='flex flex-col items-center py-3  gap-2 '>
        {technologies?.length > 0 && technologies?.map((technology, index) => (
          <h1 key={index} className='text-[#555] text-md font-normal' data-aos='zoom-in' data-aos-delay={delay+index*100}>{technology}</h1>
          ))}
        </main>
    </article>
  )
}

export default Skill