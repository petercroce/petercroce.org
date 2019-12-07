import React, { Component } from 'react';
import me from './imgs/Peter-Croce.jpg';
import './App.css';
import './normalize.css';



class App extends Component {
  render() {
    return (
      <div className="App">

      <body>
        <div className="welcome-section">

          <div className="section -paragraph">
            <img src={me} alt="Headshot of Peter Croce" id="headshot" />
            <h1>Peter Croce</h1>
            <p>I'm a lead product manager currently work with the good people at <a href="https://postlight.com" target="_blank" rel="noopener noreferrer">Postlight</a> in New York City.</p>
            <p>Before working in technology, I served as an AmeriCorps volunteer auditing businesses' environmental impact and offering custom efficiency improvement roadmaps.</p>
            <p>Before that, I slowly work-traveled and hitchhiked through parts of Europe while working freelance as a software engineer, <a href="https://www.youtube.com/watch?v=UCwNYGvzR5E&t" target="_blank" rel="noopener noreferrer">lived and worked on a sailboat</a>, and <a href="https://www.youtube.com/watch?v=C-OcMKMY23I" target="_blank" rel="noopener noreferrer">teleported around Scotland and Wales</a>.</p>
            <p>I am drawn to business and technology because I believe they are the biggest levers to enact large-scale solutions. I am starting with climate change. I am an American and European citizen looking for ways I can make an impact on either or both continents.</p>
          </div>

        </div>

        <div className="main-section">

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
                Making tools for reversing climate change as <a href="https://reversible.cc" target="_blank" rel="noopener noreferrer">Reversible</a>
              </li>
              <li>
                Hosting pragmatic optimists at <a href="https://www.meetup.com/carbonremovalnyc" target="_blank" rel="noopener noreferrer">Carbon Removal NYC</a>
              </li>
              <li>
                Hosting meetups for NYC-based product managers at <a href="https://postlight.com/events" target="_blank" rel="noopener noreferrer">Postlight</a>
              </li>
              <li className="list-style-type-circle">
                Hosted meetups for readers of <a href="https://waitbutwhy.com" target="_blank" rel="noopener noreferrer">Wait But Why</a> at <a href="https://www.meetup.com/Wait-But-Why-NYC" target="_blank" rel="noopener noreferrer">Wait But Why NYC</a>
              </li>
              <li className="list-style-type-circle">
                Learned biologically inspired design as <a href="https://www.instagram.com/biomimicry/" target="_blank" rel="noopener noreferrer">@biomimicry</a>
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
            <ul>
              <li>
                <a href="mailto:pscroce@gmail.com">pscroce@gmail.com</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/pscroce">LinkedIn</a>
              </li>
            </ul>
          </div>

        </div>

      </body>

      <div className="section">
      <footer>
        <p>
          Peter lives in Brooklyn with his partner, <a
            href="https://erinpeace.com"
            target="_blank"
            rel="noopener noreferrer"
              >Erin</a>.
        </p>
      </footer>
      </div>

      </div>
    );
  }
}

export default App;
