import React from 'react';
import Projects from '../Projects'



const projectsArray = [
  {
    id: 1,
    name: "BabyBrain",
    image: "/babybrain.png",
    liveSite: "https://arcane-retreat-82910.herokuapp.com/home",
    repo: "https://github.com/azizahmed77/baby-brain"
  },
  {
    id: 1,
    name: "Quote-Battle",
    image: "/kanye.png",
    liveSite: "https://arcane-retreat-82910.herokuapp.com/home",
    repo: "https://github.com/azizahmed77/baby-brain"
  },
  {
    id: 1,
    name: "Code Quiz",
    image: "/codequiz.png",
    liveSite: "https://arcane-retreat-82910.herokuapp.com/home",
    repo: "https://github.com/azizahmed77/baby-brain"
  },

  {
    id: 1,
    name: "Weather Dashboard",
    image: "/weather.png",
    liveSite: "https://arcane-retreat-82910.herokuapp.com/home",
    repo: "https://github.com/azizahmed77/baby-brain"
  },
  {
    id: 1,
    name: "Taskmaster Pro",
    image: "/taskmaster.png",
    liveSite: "https://arcane-retreat-82910.herokuapp.com/home",
    repo: "https://github.com/azizahmed77/baby-brain"
  },
  {
    id: 1,
    name: "Run-Buddy",
    image: "/run-buddy.png",
    liveSite: "https://arcane-retreat-82910.herokuapp.com/home",
    repo: "https://github.com/azizahmed77/baby-brain"
  }
];

const Portfolio = () => {
  return (
    <section className = "mx-auto">
      <h2 className ="py-4">Portfolio</h2>
     <Projects projectsArray={projectsArray} />
    </section>
  );
}

export default Portfolio