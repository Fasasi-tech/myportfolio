import { motion } from 'framer-motion'
import React from 'react'
import './About.scss'
import {images} from '../../constant'
import {AppWrap} from '../../wrapper'

const abouts = [
  {title: 'Web Development', description:'I am good web developer', imgUrl:images.about01},
  {title: 'Frontend Development', description:'I am good frontend developer', imgUrl:images.about02},
  {title: 'Backend development', description:'I am a junior backend developer', imgUrl:images.about03},
  {title: 'MERN', description:'I am a junior developer', imgUrl:images.about04}
]

const About = () => {
  return (
    <div className='about__parent'>
      <h1 className='about_heading'>
        I know that <span>good design</span> means <span>good business</span>
      </h1>
      <div className='app_profiles'>
        {abouts.map((about,index)=>(
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:'tween'}}
            className="app_profile-item"
            key={about.title+index}>
              <img src={about.imgUrl} alt="" className="img_about_pr"/>
            <div className='inline_style'>
              <h2 className='bold-textss' style={{marginTop:"20px", color:"orange"}}>{about.title}</h2>
              <p className='p-texts' style={{marginTop:"10px", color:"gray"}}>{about.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(About, 'about')