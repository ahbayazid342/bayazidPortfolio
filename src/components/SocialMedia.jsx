import React from 'react';
import {BsGithub} from 'react-icons/bs';
import { FaFacebookF, FaLinkedin, FaCode } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/ahsan-habib-bayazid-67b18a203/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/mdbayazid.bayazid.56" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
      </a>
    </div>
    <div>
    <a href="https://github.com/ahbayazid342" aria-label="Github" target="_blank" rel="noopener noreferrer">
      <BsGithub />
      </a>
    </div>
    <div>
    <a href="https://www.stopstalk.com/user/profile/bayazidcse27" aria-label="Stopstalk" target="_blank" rel="noopener noreferrer">
    <FaCode />
      </a>
    </div>
  </div>
);

export default SocialMedia;
