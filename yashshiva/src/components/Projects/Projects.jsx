import React from 'react'
import { PROJECTS } from '../../constants'
import { motion } from 'framer-motion'
const ProjectVariants = {
    hidden:{opacity:0,scale:0.0,rotate: -100,y:50},
    visible:{
        opacity:1,
        scale:1,
        rotate:0,
        y:0,
        transition:{
            duration:0.8,
            ease:"easeIn",
            type:"spring",
            bounce:0.2,
        }
    }
}
const Projects = () => {
  return (
    <section className='px-6 py-10' id='work'>
        <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>Projects</h1>
        <div className='h-1 w-20 mb-8 bg-white'></div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {PROJECTS.map((project,index)=>(
                <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden h-[350px]
                transition transform object-cover"
                initial="hidden"
                whileInView="visible"
                viewport={{once:false}}
                variants={ProjectVariants}>
                 <img src={project.image} alt={project.name}
                 className='absolute inset-0 w-full h-full
                 object-cover transition-opacity duration-300' />

                 <div className='relative z-20 p-6 flex flex-col
                 justify-between h-full bg-black/30 text-white'>
                    <h2 className='text-2xl font-medium mb-4'>{project.name}</h2>
                    <p className='mb-4 flex-grow text-2xl
                    '>{project.description}</p>
                    <div className='flex justify-between'>
                    <a href={project.link} target='_blank'
                    rel='noopener norefferer'
                    className='bg-white text-stone-900
                    rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center'>
                        View On Github
                    </a>
                    <a href={project.live} target='_blank'
                    rel='noopener norefferer'
                    className='bg-white text-stone-900
                    rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center'>
                        View live app
                    </a>
                    </div>
                 </div>
                </motion.div>
            ))}
        </div>
    </section>
    
  )
}

export default Projects
