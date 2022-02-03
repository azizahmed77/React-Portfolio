import React from 'react';
import Projects from '../Projects'
import connectFour from '../../assets/images/connect-4.png'
import kanyeQuotes from '../../assets/images/kanye.png'
import codeQuiz from '../../assets/images/codequiz.png'
import weatherDashboard from '../../assets/images/weather.png'
import taskmaster from '../../assets/images/taskmaster.png'
import runBuddy from '../../assets/images/run-buddy.png'
const projectsArray = [
  {
    id: 1,
    name: "Connect-Four",
    image: connectFour,
    liveSite: "https://cbc-connect-4.herokuapp.com/",
    repo: "https://github.com/azizahmed77/connect-four"
  },
  {
    id: 1,
    name: "Quote-Battle",
    image: kanyeQuotes,
    liveSite: "https://concord511.github.io/Quote-Battle/",
    repo: "https://github.com/azizahmed77/Quote-Battle"
  },
  {
    id: 1,
    name: "Code Quiz",
    image: codeQuiz,
    liveSite: "https://azizahmed77.github.io/Code-Quiz/",
    repo: "https://github.com/azizahmed77/Code-Quiz"
  },

  {
    id: 1,
    name: "Weather Dashboard",
    image: weatherDashboard,
    liveSite: "https://azizahmed77.github.io/Weather-dashboard/",
    repo: "https://github.com/azizahmed77/Weather-dashboard"
  },
  {
    id: 1,
    name: "Taskmaster Pro",
    image: taskmaster,
    liveSite: "https://azizahmed77.github.io/taskmaster-pro/",
    repo: "https://github.com/azizahmed77/taskmaster-pro"
  },
  {
    id: 1,
    name: "Run-Buddy",
    image: runBuddy,
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