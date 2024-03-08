import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
    return (

        <div
            id='home'
            className='section container mx-auto max-w-[1200px] px-3 items-center'>
            <div className='w-full' data-aos='zoom-in'>
                <div className='block text-center font-secondary font-black text-[30px]'>
                    <h3>Hello, I am Name</h3>
                    <div>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Frontend Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Backend Developer',
                                1000,
                                'React Developer',
                                1000,
                                '3D Artist',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className='ml-3 text-secondary'
                            repeat={Infinity} />
                    </div>
                </div>
                <div className='max-w-[750px] text-center mx-auto mt-5'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ea dolorem, recusandae possimus molestias sapiente, earum fugiat odio, officiis incidunt animi voluptatem error facere! Iusto corporis perspiciatis quo qui voluptatibus!
                </div>
            </div>
        </div>
    )
}
