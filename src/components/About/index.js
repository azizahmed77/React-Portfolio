import React from 'react';
import profilePhoto from '../../assets/images/me2.JPG'

const About = () => {
    return (
        <div className = "mx-auto w-50">
        <h1 className ="py-4">About me</h1>
        <article>
              <img className = "profile-pic" src={profilePhoto} style={{width:"100%"}} alt='Aziz Ahmed'></img>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </article>
      </div>
    )
}

export default About;