'use client';
import { sendContactForm } from '@/lib/api';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { TbSend } from 'react-icons/tb'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const sectionRef = useRef(null)
    const formRef = useRef(null)
    const linksRef = useRef(null)

    const regexEmail = /([a-zA-Z0-9.\-_]{6,30})@([a-z]{2,10})\.([a-zA-Z]{2,5})/;
    const regexName = /^[A-Za-z]+$/;

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(formRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', toggleActions: 'play none none none' }
                }
            )
            gsap.fromTo(linksRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.15,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', toggleActions: 'play none none none' }
                }
            )
        })
        return () => ctx.revert()
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        let values = {
            name: name,
            email: email,
            message: message
        }
        try {
            if (regexEmail.test(email) && regexName.test(name)) {
                setName('');
                setEmail('');
                setMessage('');

                toast.promise(sendContactForm(values), {
                    success: 'Email sent successfuly!',
                    loading: 'Sending, dont close the website!',
                    error: 'Error while sending email'
                });
            }
        } catch (error) {
            toast.error('Please enter the right values');
            console.log(error)
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return (
        <section ref={sectionRef} id='contact' className='bg-[#F9F9F9] py-20'>
            <div className='container'>
                <main className='flex flex-col md:flex-row items-center'>
                    <form ref={formRef} className='flex flex-col shadow-md p-3 bg-white
                                 w-full md:w-fit rounded-xl gap-5 opacity-0'
                        onSubmit={(e) => sendEmail(e)}
                    >
                        <label className='px-2 pt-2'>
                            <h1 className='text-2xl w-full text-[#147efb] font-bold'>Get in touch 👇</h1>
                        </label>
                        <label className='flex flex-col py-2 relative'>
                            <input type="text" required className='bg-[#F9F9F9] p-3 focus:border
                                                               focus:border-[#147efb]  focus:outline-[#147efb] shadow
                                                                 rounded-xl md:w-[300px] w-full'
                                onChange={e => setName(e.target.value)} />
                            <h1 className={
                                name != '' ? 'absolute top-[-10%] bg-white w-fit text-[#147efb] left-3 right-0 text-lg' : 'absolute top-5 left-3 right-0 text-lg w-full'
                            }>
                                Name
                            </h1>
                        </label>
                        <label className='flex flex-col py-2 relative'>
                            <input type="email" required
                                className='bg-[#F9F9F9] p-3 focus:border
                                             focus:border-[#147efb]  focus:outline-[#147efb] shadow
                                             rounded-xl md:w-[300px] w-full'
                                onChange={e => setEmail(e.target.value)} />
                            <h1 className={
                                email != '' ? 'absolute top-[-10%] bg-white w-fit text-[#147efb] left-3 right-0 text-lg' : 'absolute top-5 left-3 right-0 text-lg w-full'
                            }>
                                Email
                            </h1>
                        </label>
                        <label className='flex flex-col py-2 relative'>
                            <textarea type="text" required
                                rows={5}
                                className={
                                    `${message != '' ? 'bg-white ' : 'bg-[#F9F9F9] '
                                    } p-3 focus:border
                                  focus:border-[#147efb]  focus:outline-[#147efb] shadow
                                  rounded-xl md:w-[300px] w-full max-h-[300px] min-h-[100px]`
                                }
                                onChange={e => setMessage(e.target.value)} />
                            <h1 className={
                                message != '' ? 'absolute top-[-5%] bg-white w-fit text-[#147efb] left-3 right-0 text-lg' : 'absolute top-5 left-3 right-0 text-lg w-full'
                            }>
                                Message
                            </h1>
                        </label>
                        <button className='text-[#147efb] border border-[#147efb] rounded-xl
                                           py-2 flex flex-row items-center justify-center w-full
                                          hover:bg-[#147efb] hover:text-white ease-in-out duration-700'>
                            Send
                            <TbSend />
                        </button>
                    </form>
                    <div ref={linksRef} className='flex flex-col mx-auto gap-6 opacity-0'>
                        <div>
                            <header className='flex items-center justify-center text-center md:mt-4 mt-10 mb-4'>
                                <h1 className='text-[#147efb] font-bold text-2xl'>{`Let's Connect🌐`}</h1>
                            </header>
                            <Link href={'mailto:clocicovalexandru@gmail.com'}
                                target='_blank'
                                className='flex flex-row items-center gap-3 bg-white p-4 rounded-xl  shadow-md border
                                            hover:border-[#147efb] ease-linear duration-700'>
                                <div className='p-4 rounded-full bg-white text-[#147efb] border shadow-md'>
                                    <AiOutlineMail size={'2rem'} />
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='font-bold'>Email</h3>
                                    <p>clocicovalexandru@gmail.com</p>
                                </div>
                            </Link>
                        </div>
                        <Link href={'https://www.linkedin.com/in/alexandru-clocicov/'}
                            target='_blank'
                            className="flex flex-row items-center gap-3 bg-white p-4 rounded-xl  shadow-md border
                                        hover:border-[#147efb] ease-linear duration-700">
                            <div className='p-4 rounded-full bg-white text-[#147efb] border shadow-md'>
                                <AiFillLinkedin size={'2rem'} />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold'>Linkedin</h3>
                                <p>linkedin.com/in/alexandru-clocicov</p>
                            </div>
                        </Link>
                        <Link href={'https://github.com/Lienkulet'}
                            target='_blank'
                            className="flex flex-row items-center gap-3 bg-white p-4 rounded-xl  shadow-md border
                                         hover:border-[#147efb] ease-linear duration-700">
                            <div className='p-4 rounded-full bg-white text-[#147efb] border shadow-md'>
                                <AiFillGithub size={'2rem'} />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold'>Github</h3>
                                <p>github.com/Lienkulet</p>
                            </div>
                        </Link>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Contact

