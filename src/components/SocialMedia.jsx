import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://twitter.com/Fasasi_tech'>
      <BsTwitter />
      </a> 
    </div>
    <div>
      <a href='https://github.com/Fasasi-tech'>
      <BsGithub />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/fasasi-ridwan-0b85661a7'>
      <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
