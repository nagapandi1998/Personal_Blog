import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsPersonWorkspace } from "react-icons/bs";

const Experience = () => {
    return (
        <div className="experiences">
            <div className="container">
                <div className="row">
                    <div className="experience-col-3">
                        <h1 className='pinkname' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Experience</h1>
                        <div data-aos="fade-right" data-aos-duration="2200">
                            <h3 className='pinkname'>2020 - 2023</h3>
                            <p><BsPersonWorkspace className='expicons' />Calibration Engineer</p>
                            <p><HiBuildingOffice2 className='expicons' />Sansel Intruments & Controls</p>
                            <p><FaMapMarkerAlt className='expicons' />Chennai</p>
                        </div>
                        <br />
                        <h1 className='pinkname' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
                            Achievements</h1>
                        <ul data-aos="zoom-in-right" className="achivement-list" data-aos-duration="2000" >
                            <div>
                                <li className='achivement-list'>Smart Table Menu Ordering System for Restaurant paper published in “ICASE’20”, International conference 2020</li>
                            </div>
                        </ul>
                        <br />
                        <h1 className='pinkname' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Courses</h1>
                        <ul data-aos-offset="50">
                            <li data-aos="zoom-in-up" data-aos-duration="2000" className='achivement-list'>Completed HTML5, CSS3, Javascript, ReactJS in FITA Academy</li>
                            <li data-aos="zoom-in-up" data-aos-duration="2000" className='achivement-list'>Completed SAP certified with 85% in Material Management</li>
                        </ul>
                    </div>
                    <div data-aos="zoom-in-down" data-aos-duration="3000" data-aos-offset="300" className="experience-col-4">
                        <img src={require('./Assets/experience.jpg')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience