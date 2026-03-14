'use client'
import React from 'react'

const Skill = ({ skill: { name, technologies } }) => {
    return (
        <article className='relative group flex flex-col items-center bg-white w-full md:w-[230px] h-[280px] rounded-lg shadow p-2
            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default'>

            {/* Corner brackets — all 4 corners */}
            <span className='absolute -top-[3px] -left-[3px] w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:border-[#147efb] transition-all duration-300 rounded-tl-lg' />
            <span className='absolute -top-[3px] -right-[3px] w-5 h-5 border-t-2 border-r-2 border-transparent group-hover:border-[#147efb] transition-all duration-300 rounded-tr-lg' />
            <span className='absolute -bottom-[3px] -left-[3px] w-5 h-5 border-b-2 border-l-2 border-transparent group-hover:border-[#147efb] transition-all duration-300 rounded-bl-lg' />
            <span className='absolute -bottom-[3px] -right-[3px] w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-[#147efb] transition-all duration-300 rounded-br-lg' />

            <header className='flex flex-col items-center border-b w-full p-2 gap-2'>
                <h3 className='font-semibold text-lg group-hover:text-[#147efb] transition-colors duration-300'>{name}</h3>
            </header>
            <main className='flex flex-col items-center py-3 gap-2'>
                {technologies?.map((technology, index) => (
                    <p key={index} className='text-[#555] text-md font-normal hover:text-[#147efb] transition-colors duration-200'>{technology}</p>
                ))}
            </main>
        </article>
    )
}

export default Skill
