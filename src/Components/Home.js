import React from 'react'


const Home = () => {
  return (
            <div className="container">
                <div className="header-text">
                    <h1 data-aos="fade-right" data-aos-duration="1800">Hi, I'm Nagapandi <span>Gandhi</span> </h1>
                    <h1 data-aos="fade-left" data-aos-duration="2000">ReactJS Developer</h1>
                    <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={require('./Assets/avatar.jpg')} alt="" />
                    
                </div>
                
            </div>
  )
}

export default Home