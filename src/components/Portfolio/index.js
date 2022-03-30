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
    description: "Our rendition of a classic two-player connection board game",
    liveSite: "https://cbc-connect-4.herokuapp.com/",
    repo: "https://github.com/azizahmed77/connect-four"
  },
  {
    id: 1,
    name: "Deep Thoughts",
    image: deepThoughts,
    description: ` A social media app where users can create an account, share thoughts and react to others’ thoughts.`
    ,
    liveSite: "https://arcane-depths-10773.herokuapp.com/",
    repo: "https://github.com/azizahmed77/Deep-Thoughts"
  },
  {
    id: 1,
    name: "Shop-Shop",
    image: shopShop,
    description: `An e-commerce application that allows a user to purchase an assortment of different products by adding them to a shopping cart and completing their order through a secure payment platform. A user is also able to view a history of their orders.
    `,
    liveSite: "https://stark-beach-94885.herokuapp.com/",
    repo: "https://github.com/azizahmed77/shop-shop-redux"
  },

  {
    id: 1,
    name: "Weather Dashboard",
    image: weatherDashboard,
    description: "An app that retrives the weather of a given location, allowing you to plan trips accordingly",
    liveSite: "https://azizahmed77.github.io/Weather-dashboard/",
    repo: "https://github.com/azizahmed77/Weather-dashboard"
  },
  {
    id: 1,
    name: "Taskmaster Pro",
    image: taskmaster,
    description: " A note-taking app that will help to better oeganize your daily activiies",
    liveSite: "https://azizahmed77.github.io/taskmaster-pro/",
    repo: "https://github.com/azizahmed77/taskmaster-pro"
  },
  {
    id: 1,
    name: "Run-Buddy",
    image: runBuddy,
    description: "A front-facing website for a gym to display to their clients",
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