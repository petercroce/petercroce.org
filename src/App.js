import React, { Component } from 'react';
import me from './imgs/Peter-Croce.jpg';
import './App.css';
import './normalize.css';



class App extends Component {
  render() {
    return (
      <div className="App">

      <body>

        <div className="welcome-section section">
          <img src={me} alt="Headshot of Peter Croce" id="headshot" />
          <h1>Peter Croce</h1>
          <p>I am a lead product manager currently working with the good people at <a href="https://postlight.com" target="_blank" rel="noopener noreferrer">Postlight</a> in New York City.</p>
        </div>

        <div className="main-section">

        <div className="section -paragraph">
          <h2>Background</h2>
          <p>Before product management, I worked as a software engineer and designer.</p>
          <p>Before working in technology, I served as an AmeriCorps volunteer auditing businesses' environmental impact and offering custom efficiency improvement roadmaps.</p>
          <p>Before that, I slowly work-traveled through parts of Europe while working freelance as a software engineer, <a href="https://www.youtube.com/watch?v=UCwNYGvzR5E&t" target="_blank" rel="noopener noreferrer">lived and worked on a sailboat</a>, and <a href="https://www.youtube.com/watch?v=C-OcMKMY23I" target="_blank" rel="noopener noreferrer">teleported around Scotland and Wales</a>.</p>
          <p>I am drawn to business and technology because I believe they are the biggest levers to enact large-scale solutions. I am focused on our climate crisis.</p>
        </div>

          <div className="section -paragraph">
            <h2>Select products shipped</h2>
            <h3>0 to 1 products</h3>
            <ul>
              <li>
                <a href="https://www.sagesure.com/find-an-agent/" title="Visit the SageSure Find an Agent application" target="_blank" rel="noopener noreferrer">Find an Agent</a>, a map-based search tool to help homeowners find SageSure homeowners insurance agents nearby
              </li>
              <li>
                <a href="https://www.dollarshaveclub.com/content" title="Visit Original Content on Dollar Shave Club" target="_blank" rel="noopener noreferrer">Original Content</a>, a CMS and company blog for Dollar Shave Club
              </li>
              <li>
                <a href="https://melmagazine.com/" title="Visit MEL Magazine" target="_blank" rel="noopener noreferrer">MEL Magazine</a>, a CMS and online magazine
              </li>
            </ul>
            <h3>1 to N products</h3>
            <ul>
              <li>
                <a href="https://postlight.com/work/insight" title="View the case study on Postlight.com" target="_blank" rel="noopener noreferrer">Agent Portal</a>, an insurance quoting engine and policy management system for insurance agents who sell SageSure homeowners insurance for Insight Catastrophe Group
              </li>
              <li>
                <a href="https://my.sagesure.com/" title="Visit the MySageSure policyholder account manager" target="_blank" rel="noopener noreferrer">MySageSure</a>, a policyholder account management web application for Insight Catastrophe Group
              </li>
              <li>
                <a href="https://www.pbs.org/the-great-american-read/home/" title="Visit the website" target="_blank" rel="noopener noreferrer">The Great American Read website</a>, an online index of books and a voting application for the PBS show The Great American Read
              </li>
              <li>
                <a href="https://postlight.com/work/audubon" title="View the case study on Postlight.com" target="_blank" rel="noopener noreferrer">Audubon Bird Guide</a>, an iOS and Android birdwatching app for The Audubon Society
              </li>
            </ul>
          </div>

          <div className="section -paragraph">
            <h2>Side projects & community</h2>
            <ul>
              <li>
                Hosting pragmatic optimists at <a href="https://www.meetup.com/carbonremovalnyc" target="_blank" rel="noopener noreferrer">Carbon Removal NYC</a>
              </li>
              <li>
                Making a simple carbon footprint calculator at <a href="https://reversible.cc" target="_blank" rel="noopener noreferrer">Reversible</a>
              </li>
              <li>
                Hosting meetups for NYC-based product managers at <a href="https://postlight.com/events" target="_blank" rel="noopener noreferrer">Postlight</a>
              </li>
            </ul>

          </div>

          <div className="section -paragraph">
            <h2>Say hello</h2>
            <p>I'm always happy to talk, especially about climate crisis solutions, good product and service design work, and fun outdoor adventures. <a href="mailto:pscroce@gmail.com">Say hello</a>.</p>
            <div className="social-links">
              <ul>
                <li><a href="https://linkedin.com/in/pscroce" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/petercroce" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>

        </div>

      </body>

      </div>
    );
  }
}

export default App;
