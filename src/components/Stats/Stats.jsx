import React from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
 const stats =[
    {
        num: 10,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 250,
        text: "Code Commits",
    },
 ]

const Stats = () => {
  return (
   <motion.section whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='pt-4 pb-12 xl:pt-0 xl:pb-8 xl:mt-6 mt-4'>
    <div className="container mx-auto">
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
            {stats.map((item,index)=>{
                return <div key={index} className='flex-1 flex gap-4 items-center justify-center xl:justify-center'>
                    <CountUp end={item.num} duration={5} delay={2} className='text-4xl xl:text-5xl font-extrabold' />
                    <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}leading-snug text-white/80`}>{item.text}</p>
                </div>
            })}
        </div>
    </div>
   </motion.section>
  )
}

export default Stats
