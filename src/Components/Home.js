import React from 'react'
import "./Navbar.css"

const Home = () => {
  return (
    <div className='homes'>
      <div className='homescontainer'>
        <div className='row'>
          <div className='home-col-1'>
            <h1 className='homeheader' data-aos="fade-right" data-aos-duration="1800">Hi, I'm Nagapandi <span className='pinkname'>Gandhi</span></h1>
            <h1 className='homeheader' data-aos="fade-left" data-aos-duration="2000">ReactJS Developer</h1>
            <div><br/><br />
              <h1 className='pinkname'>About Me</h1>
              <p>To find a suitable position to challenge my web development skills to create scalable
                web applications for diverse businesses. Trained in ReactJS, HTML, JS and basic web
                development course.</p>
            </div>
          </div>
          <div className='home-col-2'>
            <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={require('./Assets/avatar.png')} alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home