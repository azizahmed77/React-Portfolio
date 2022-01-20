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
    liveSite: "https://concord511.github.io/Quote-Battle/",
    repo: "https://github.com/azizahmed77/Quote-Battle"
  },
  {
    id: 1,
    name: "Code Quiz",
    image: "/codequiz.png",
    liveSite: "https://azizahmed77.github.io/Code-Quiz/",
    repo: "https://github.com/azizahmed77/Code-Quiz"
  },

  {
    id: 1,
    name: "Weather Dashboard",
    image: "/weather.png",
    liveSite: "https://azizahmed77.github.io/Weather-dashboard/",
    repo: "https://github.com/azizahmed77/Weather-dashboard"
  },
  {
    id: 1,
    name: "Taskmaster Pro",
    image: "/taskmaster.png",
    liveSite: "https://azizahmed77.github.io/taskmaster-pro/",
    repo: "https://github.com/azizahmed77/taskmaster-pro"
  },
  {
    id: 1,
    name: "Run-Buddy",
    image: "/run-buddy.png",
    liveSite: "https://azizahmed77.github.io/run-buddy/",
    repo: "https://github.com/azizahmed77/run-buddy"
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