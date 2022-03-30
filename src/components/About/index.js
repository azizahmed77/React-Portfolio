import React from 'react';
import profilePhoto from '../../assets/images/me2.JPG'

const About = () => {
    return (
        <div className = "mx-auto w-50">
        <h1 className ="py-4">About me</h1>
        <article>
              <img className = "profile-pic" src={profilePhoto} style={{width:"100%"}} alt='Aziz Ahmed'></img>
              <p>Newly-minted full-stack web developer with a background in Anthropology looking to translate my experience with evidence-based insight about human behavior into designing more intuitive experiences online. </p>
          </article>
      </div>
    )
}

export default About;