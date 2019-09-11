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
            <p>I'm a senior product manager currently work with the good people at <a href="https://postlight.com" target="_blank" rel="noopener noreferrer">Postlight</a> in New York City.</p>
            <p>I have also worked as an innovation lab facilitator for <a href="https://thedali.org/innovation" target="_blank" rel="noopener noreferrer">The Dali Museum</a> and served as an AmeriCorps volunteer auditing businesses' environmental impact and offering custom efficiency roadmaps. </p>
            <p>Before that, I slowly work-traveled and hitchiked through parts of Europe while working freelance as a front-end software engineer, <a href="https://www.youtube.com/watch?v=UCwNYGvzR5E&t" target="_blank" rel="noopener noreferrer">lived and worked on a sailboat</a>, and <a href="https://www.youtube.com/watch?v=C-OcMKMY23I" target="_blank" rel="noopener noreferrer">teleported around Scotland and Wales</a>.</p>
            <p>I am drawn to business and technology because I believe the two together are the biggest levers to effect social good.</p>
          </div>

        </div>

        <div className="main-section">

          <div className="section -paragraph">
            <h2>Past clients</h2>
            <ul>
              <li>
                The Audubon Society
              </li>
              <li>
                Dollar Shave Club
              </li>
              <li>
                Insight Catastrophe Insurance
              </li>
              <li>
                PBS (Public Broadcasting Service)
              </li>
              <li>
                MEL Magazine
              </li>
            </ul>
          </div>

          <div className="section -paragraph">
            <h2>Side projects & community</h2>
            <ul>
              <li>
                Hosting meetups for NYC-based product managers at <a href="https://postlight.com/events" target="_blank" rel="noopener noreferrer">Postlight</a>
              </li>
              <li>
                Hosting meetups for readers of <a href="https://waitbutwhy.com" target="_blank" rel="noopener noreferrer">Wait But Why</a> at <a href="https://www.meetup.com/Wait-But-Why-NYC" target="_blank" rel="noopener noreferrer">Wait But Why NYC</a>
              </li>
              <li>
                Co-founded Overlap, a non-profit organization that helps local businesses qualify and apply for B Corporation certification
              </li>
              <li>
                <a href="https://startingbloc.org/" target="_blank" rel="noopener noreferrer">StartingBloc</a>
              </li>
              <li>
                <a href="https://www.globalshapers.org/" target="_blank" rel="noopener noreferrer">Global Shapers</a>
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
            rel="noopener noreferrer nofollow"
              >Erin</a>.
        </p>
      </footer>
      </div>

      </div>
    );
  }
}

export default App;
