import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BiLogoGithub } from 'react-icons/bi';
import Tooltip from '@mui/material/Tooltip';

const Contact = () => {
    return (
        <div id="contact" class="contact">
            <div class="container">
                <div className='row'>
                    <div className='contactimage contact-col-1'>
                        <img src={require("./Assets/contact.jpg")} alt="" />
                    </div>
                    <div class="contacts contact-col-2">
                        <h1 className='pinkname' data-aos="flip-up" data-aos-duration="2000">Contact Me</h1>
                        <p><FaEnvelope /> <a href="mailto:nagapandieee1998@gmail.com">nagapandieee1998@gmail.com</a></p>
                        <p><FaPhoneSquareAlt /> <a href="tel:+91-6374601412">+91 6374601412</a></p>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/nagapandi.nagapandi.7547/" target='blank'><FaFacebook /></a>
                            <a href="https://twitter.com/nagapandi25" target='blank'><FaTwitterSquare /></a>
                            <a href="https://www.instagram.com/_nagapandi" target='blank'><FaInstagramSquare /></a>
                            <a href="https://www.linkedin.com/in/nagapandi-g-51a06b1b9" target='blank'><FaLinkedin /></a>
                            <a href="https://github.com/nagapandi1998" target='blank'><BiLogoGithub /></a>
                        </div>
                        <div data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1000" className="cv">
                            <Tooltip title="Click to Download" arrow  placement="top">
                                <a href="Nagapandi Resume.pdf" download="Nagapandi Resume.pdf">
                                    <FaCloudDownloadAlt className='cvdownloadicon' />Download CV</a>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact