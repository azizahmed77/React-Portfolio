import React from 'react';
import Projects from '../Projects'
import connectFour from '../../assets/images/connect-4.png'
import kanyeQuotes from '../../assets/images/kanye.png'
import shopShop from '../../assets/images/shopshop.png'
import weatherDashboard from '../../assets/images/weather.png'
import taskmaster from '../../assets/images/taskmaster.png'
import runBuddy from '../../assets/images/run-buddy.png'
import deepThoughts from '../../assets/images/deepthoughts.png'

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
    name: "Deep Thoughts",
    image: deepThoughts,
    liveSite: "https://arcane-depths-10773.herokuapp.com/",
    repo: "https://github.com/azizahmed77/Deep-Thoughts"
  },
  {
    id: 1,
    name: "Shop-Shop",
    image: shopShop,
    liveSite: "https://stark-beach-94885.herokuapp.com/",
    repo: "https://github.com/azizahmed77/shop-shop-redux"
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