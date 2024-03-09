import React from 'react'
import { Link } from 'react-scroll'
import { BiHome, BiUser, BiBook } from "react-icons/bi";

export default function Navigation() {
    return (
        <div className='flex justify-center fixed bottom-5 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5'>
            <div className='flex justify-between mx-auto bg-white text-secondary p-2 rounded-full border-secondary border-solid border-[1px] max-x-[200px] lg:flex-col'>
                <Link
                    to='home'
                    className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer'
                    // activeClass='active'
                    // spy={true}
                    offset={0}
                    smooth={true} >
                    <BiHome />
                </Link>
                <Link
                    to='profile'
                    className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer'
                    // activeClass='active'
                    // spy={true}
                    // offset={-10}
                    smooth={true} >
                    <BiUser />
                </Link>
                <Link
                    to='portfolio'
                    className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer'
                    // activeClass='active'
                    // spy={true}
                    // offset={100}
                    smooth={true} >
                    <BiBook />
                </Link>
            </div>
        </div>
    )
}
