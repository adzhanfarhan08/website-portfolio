import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header() {
    return (
        <div className='container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0'>
            <div className='flex justify-between py-5 items-center'>
                <div className='text-gradient font-secondary' data-aos='fade-down' data-aos-easing='ease-in-sine' data-aos-duration='600' data-aos-delay='0'>
                    <a href="#">
                        <h1 className='text-[30px] leading-none font-bold uppercase'>Full</h1>
                        <h4 className='font-normal leading-none uppercase'>Name</h4>
                    </a>
                </div>
                <div className='flex items-center space-x-5' data-aos='fade-up' data-aos-easing='ease-in-sine' data-aos-duration='600' data-aos-delay='0'>
                    <a href=""><BsGithub /></a>
                    <a href=""><BsLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

