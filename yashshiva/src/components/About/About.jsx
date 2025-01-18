import React from 'react'
import { ABOUT_CONTENT } from '../../constants'
import { motion } from 'framer-motion'
const About = () => {
    const textVariants = {
        hidden:{opacity:0,y:50},
        visible:{ opacity:1,y:0,transition:{duration:0.6,ease:"easeOut"}
    }
    }
  return (
    <section className='px-6 py-10' id='about'>
        <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>
            About
        </h1>
        <div className='h-1 w-20 mb-8 bg-white'></div>
        <div className='max-w-4xl mx-auto backdrop-blur-md bg-stone-600/30 p-3 rounded-md'>
            {ABOUT_CONTENT.paragraphs.map((paragraph,index)=>(
                <motion.p key={index} className=" text-sm
                lg:text-2xl p-5 mb-10 leading-relaxed" initial="hidden" whileInView="visible"
                viewport={{once:false,amount:0.5}}
                variants={textVariants}>
                    {paragraph}
                </motion.p>
            ))}
        </div>
    </section>
  )
}

export default About
