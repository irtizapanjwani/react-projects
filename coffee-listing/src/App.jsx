/* import React, { useState } from "react";
import Hero from "./components/Hero";
import CoffeeList from "./components/CoffeeList";

export default function App() {
  const [showAvailable, setShowAvailable] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-black flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <Hero showAvailable={showAvailable} setShowAvailable={setShowAvailable} />
        <CoffeeList showAvailable={showAvailable} />
      </div>
    </div>
  );
}
 */

/* import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='flex gap-6 p-6'>
      <Card user="Mohammad Irtiza" age={23} img="https://images.unsplash.com/photo-1759508949812-973dcd259b6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464"/>
      <Card user="Mohammad Mehdi" age={42} img="https://images.unsplash.com/photo-1759191639970-0640f2bd14de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"/>
      <Card user="Panjwani" age={28} img="https://images.unsplash.com/photo-1760048396403-5ff204868b3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"/>
    </div>
  )
}

export default App */

import React from 'react'
import User from './components/User'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    {
      price: "$120/hr",
      company: "AirBnB",
      posted: "5 Days Ago",
      title: "Senior UI Developer",
      type: "Part Time",
      logo: "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
      location: "Karachi, Pakistan"
    },
    {
      price: "$100/hr",
      company: "Google",
      posted: "2 Days Ago",
      title: "Frontend Engineer",
      type: "Full Time",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      location: "Mountain View, CA"
    },
    {
      price: "$90/hr",
      company: "Facebook",
      posted: "1 Week Ago",
      title: "React Developer",
      type: "Contract",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      location: "Menlo Park, CA"
    },
    {
      price: "$80/hr",
      company: "Amazon",
      posted: "3 Days Ago",
      title: "UI/UX Designer",
      type: "Part Time",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      location: "Seattle, WA"
    },
    {
      price: "$110/hr",
      company: "Microsoft",
      posted: "Today",
      title: "Frontend Developer",
      type: "Full Time",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      location: "Redmond, WA"
    },
    {
      price: "$95/hr",
      company: "Netflix",
      posted: "2 Weeks Ago",
      title: "React Engineer",
      type: "Contract",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      location: "Los Gatos, CA"
    },
    {
      price: "$85/hr",
      company: "Apple",
      posted: "4 Days Ago",
      title: "iOS Developer",
      type: "Full Time",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      location: "Cupertino, CA"
    },
    {
      price: "$105/hr",
      company: "Tesla",
      posted: "1 Day Ago",
      title: "Frontend Engineer",
      type: "Full Time",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      location: "Palo Alto, CA"
    },
    {
      price: "$75/hr",
      company: "Spotify",
      posted: "3 Days Ago",
      title: "UI Designer",
      type: "Part Time",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      location: "Stockholm, Sweden"
    },
    {
      price: "$130/hr",
      company: "LinkedIn",
      posted: "Today",
      title: "Frontend Developer",
      type: "Full Time",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      location: "Sunnyvale, CA"
    }
  ];
  
  return (
    <div className='min-h-screen bg-amber-100'>
      <div className=' gap-6 p-6 flex flex-wrap justify-start'>
        {jobOpenings.map(function(elem,idx){
          console.log(idx);
          return <div key={idx}>
            <Card price={elem.price} company={elem.company} posted={elem.posted} title={elem.title} type={elem.type} logo={elem.logo} location={elem.location}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default App



