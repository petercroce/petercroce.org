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
          <div className="section -paragraph">
            <img src={me} alt="Headshot of Peter Croce" id="headshot" />
            <h1>Peter Croce</h1>
            <p>I am a lead product manager currently working with the good people at <a href="https://postlight.com" target="_blank" rel="noopener noreferrer">Postlight</a> in New York City.</p>
          </div>
          <div className="social-links">
            <ul>
              <li><a href="https://linkedin.com/in/pscroce">LinkedIn</a></li>
              <li><a href="https://twitter.com/petercroce">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="main-section">

        <div className="section -paragraph">
          <h2>Background</h2>
          <p>Before product management, I worked as a designer and software engineer.</p>
          <p>Before working in technology, I served as an AmeriCorps volunteer auditing businesses' environmental impact and offering custom efficiency improvement roadmaps.</p>
          <p>Before that, I slowly work-traveled through parts of Europe while working freelance as a software engineer, <a href="https://www.youtube.com/watch?v=UCwNYGvzR5E&t" target="_blank" rel="noopener noreferrer">lived and worked on a sailboat</a>, and <a href="https://www.youtube.com/watch?v=C-OcMKMY23I" target="_blank" rel="noopener noreferrer">teleported around Scotland and Wales</a>.</p>
          <p>I am drawn to business and technology because I believe they are the biggest levers to enact large-scale solutions. I am focused on our climate crisis.</p>
          <p>I am an EU and US dual citizen.</p>
        </div>

          <div className="section -paragraph">
            <h2>Select clients</h2>
            <ul>
              <li>
                <a href="https://postlight.com/work/audubon" title="View the case study on Postlight.com" target="_blank" rel="noopener noreferrer">The Audubon Society</a>
              </li>
              <li>
                <a href="https://www.dollarshaveclub.com/content" title="Visit the website" target="_blank" rel="noopener noreferrer">Dollar Shave Club</a>
              </li>
              <li>
                <a href="https://postlight.com/work/insight" title="View the case study on Postlight.com" target="_blank" rel="noopener noreferrer">Insight Catastrophe Insurance</a>
              </li>
              <li>
                <a href="https://www.pbs.org/the-great-american-read/home/" title="Visit the website" target="_blank" rel="noopener noreferrer">PBS (Public Broadcasting Service)</a>
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

            <h3>Past</h3>
            <ul>
              <li className="list-style-type-circle">
                Hosted meetups for readers of <a href="https://waitbutwhy.com" target="_blank" rel="noopener noreferrer">Wait But Why</a> at <a href="https://www.meetup.com/Wait-But-Why-NYC" target="_blank" rel="noopener noreferrer">Wait But Why NYC</a>
              </li>
              <li className="list-style-type-circle">
                Learned biologically inspired design as <a href="https://www.instagram.com/biomimicry/" target="_blank" rel="noopener noreferrer">@biomimicry</a> on Instagram
              </li>
              <li className="list-style-type-circle">
                Co-founded Overlap, a non-profit organization that helps Central Florida businesses qualify and apply for B Corporation certification
              </li>
              <li className="list-style-type-circle">
                Member of <a href="https://startingbloc.org/" target="_blank" rel="noopener noreferrer">StartingBloc</a>
              </li>
              <li className="list-style-type-circle">
                Member of <a href="https://www.globalshapers.org/" target="_blank" rel="noopener noreferrer">Global Shapers</a>
              </li>
            </ul>
          </div>

          <div className="section -paragraph">
            <h2>Say hello</h2>
            <p>I'm always happy to talk, especially about climate crisis solutions, good product and service design work, and fun outdoor adventures. <a href="mailto:pscroce@gmail.com">Say hello</a>.</p>
          </div>

        </div>

      </body>

      </div>
    );
  }
}

export default App;
