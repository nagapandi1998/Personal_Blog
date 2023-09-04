import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" class="contact">
            <div class="container">
                <div class="contacts">
                    <h1 data-aos="flip-up" data-aos-duration="2000">Contact Me</h1>
                    <p><FaEnvelope/> <a href="mailto:nagapandieee1998@gmail.com">nagapandieee1998@gmail.com</a></p>
                    <p><FaPhoneSquareAlt /> <a href="tel:+91-6374601412">+91 6374601412</a></p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/nagapandi.nagapandi.7547/" target='blank'><FaFacebook /></a>
                        <a href="https://twitter.com/nagapandi25" target='blank'><FaTwitterSquare /></a>
                        <a href="https://www.instagram.com/_nagapandi" target='blank'><FaInstagramSquare /></a>
                        <a href="https://www.linkedin.com/in/nagapandi-g-51a06b1b9" target='blank'><FaLinkedin /></a>
                    </div>
                    <div data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1000" class="cv">
                        <a href="Nagapandi Resume.pdf" download="Nagapandi Resume.pdf"><i class="fa-regular fa-circle-down fa-bounce fa-lg"></i> <FaCloudDownloadAlt className='cvdownloadicon'/>Download CV</a>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact