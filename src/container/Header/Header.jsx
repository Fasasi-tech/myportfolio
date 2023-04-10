import React from 'react'
import './Header.scss'
import { AppWrap } from '../../wrapper';

const Header = () => {
  return (
    <div className='header_parent_div'>
        <div className='header__div'>
            <p className='p_paragraph'>Hi, my name is</p>
            <div className='headings'>
                <h1>Fasasi Ridwan</h1>
                <h3 className='next__heading'>I design and develop web based components and systems.</h3>
                <p className='paragraph_heading'>I am a software developer based in Nigeria, i develop both client and server software, great user interface and develop real life interactions.</p>
            </div>
            {/*<button className='download_button'>Download CV</button>*/}
        </div>
    </div>
  )
}
export default AppWrap(Header, 'home');