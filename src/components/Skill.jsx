'use client'
import React from 'react'

const Skill = ({ skill: { name, technologies } }) => {
    return (
        <article className='flex flex-col items-center bg-white w-full md:w-[230px] h-[280px] rounded-lg shadow p-2'>
            <header className='flex flex-col items-center border-b w-full p-2 gap-2'>
                <h1 className='font-semibold text-lg'>{name}</h1>
            </header>
            <main className='flex flex-col items-center py-3 gap-2'>
                {technologies?.map((technology, index) => (
                    <h1 key={index} className='text-[#555] text-md font-normal'>{technology}</h1>
                ))}
            </main>
        </article>
    )
}

export default Skill
