import React from 'react'
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FaUserGraduate } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSchool } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
const Education = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="400" className="about-col-1">
            <img  class="education-image" src={require('./Assets/education.jpg')} alt="" />
          </div>
          <div className="about-col-2">
          <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Education</h1>
                <div data-aos="fade-up-left" data-aos-duration="3000">
                <h3>2020</h3>
                  <p><FaUserGraduate className='eduicon'/>Bachelor of Technology (EEE) - 7.69 CGPA </p>
                  <p><FaSchool className='eduicon'/>Kalasalingam Academy of Research and Education</p>
                  <p><FaMapMarkerAlt className='eduicon'/>Virudhunagar</p><br/>
                  <h3>2016</h3>
                  <p><FaBookOpen className='eduicon'/>Higher Secondary Education - 75.9 %</p>
                  <p><FaSchool className='eduicon'/>Sri Kandasamy Vidhyalaya HSS</p>
                  <p><FaMapMarkerAlt className='eduicon'/>Madurai</p><br/>
                  <h3>2014</h3>
                  <p><FaBookOpen className='eduicon'/>Secondary School Leaving Certificate - 92.2 %</p>
                  <p><FaSchool className='eduicon'/>Sri Kandasamy Vidhyalaya HSS</p>
                  <p><FaMapMarkerAlt className='eduicon'/>Madurai</p>
                </div><br/>
                <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Skills</h1>
                    <ul data-aos="zoom-in-up" data-aos-duration="3000" className="skills_list">
                        <li><DiHtml5 className='html'/></li>
                        <li><DiCss3  className='css'/></li>
                        <li><DiJsBadge  className='javascript'/></li>
                        <li><DiReact  className='reactjs'/></li>
                    </ul>
          </div>
                
        </div>          
      </div>          
    </div>          
        


  )
}

export default Education