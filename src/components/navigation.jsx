import React from 'react'
import { Link } from 'react-scroll'
import { BiHome, BiUser, BiBook } from "react-icons/bi";

export default function Navigation() {
    return (
        <div className='fixed bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5'>
            <div className='flex justify-between mx-auto bg-white text-secondary p-2 rounded-full border-secondary border-solid border-[1px] max-x-[200px] lg:flex-col'>
                <Link
                    className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer'
                    activeClass='active'
                    to='home'
                    offset={100}
                    spy={true}
                    smooth={true} >
                    <BiHome />
                </Link>
                <Link
                    className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer'
                    activeClass='active'
                    to='profile'
                    offset={100}
                    spy={true}
                    smooth={true} >
                    <BiUser />
                </Link>
                <Link
                    className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer'
                    activeClass='active'
                    to='portfolio'
                    offset={100}
                    spy={true}
                    smooth={true} >
                    <BiBook />
                </Link>
            </div>
        </div>
    )
}
