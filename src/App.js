import React, { Component } from 'react';
import pSign from './pc-sign.svg';
import tuscany from './imgs/tuscany.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-home">
            <a href="/">
              <img src={pSign} id="p-sign" alt="The letter P in Peter's handwriting" />
            </a>
          </div>
          <div className="social-icons">
            {/* <a href="https://github.com/pscroce" target="_blank" rel="noopener noreferrer nofollow"
              className="github">GitHub</a> */}
            <a href="https://linkedin.com/in/pscroce" target="_blank" rel="noopener noreferrer nofollow"
              className="linkedin">LinkedIn</a>
            <a href="http://waitbutwhy.nyc" target="_blank" rel="noopener noreferrer nofollow"
              className="meetup">Meetup</a>
          </div>
        </header>
        <body>
          <div className="section">
            <h1>Peter Croce</h1>
            <div className="text-section">
              <p>I am a product manager, currently working with the good people at <a href="https://postlight.com" target="_blank" rel="noopener noreferrer nofollow">Postlight</a> in New York City. Before that I worked as a product manager for the design-first digital studio, <a href="https://www.ny-ave.com/" target="_blank" rel="noopener noreferrer nofollow">New York Ave</a>. During that time I have also worked part time as a facilitator of design sprint workshops for <a href="http://thedali.org/programs/innovation-labs/" target="_blank" rel="noopener noreferrer nofollow">The Dali Museum Innovation Labs</a> in St. Petersburg, Florida.</p>
            </div>
          </div>
          <div className="section">
            <h2>Projects</h2>
            <div className="card-list">
              <div className="card">
                <h3>Italian Citizenship Guide</h3>
                <p>Descendents of Italian citizens can obtain Italian citizenship. It took me four years. I made a guide to make it easier for others.</p>
                <a href="https://italiancitizenshipguide.com" target="_blank" rel="noopener noreferrer nofollow">Italian Citizenship Guide</a>
              </div>
              <div className="card">
                <h3>Wait But Why NYC</h3>
                <p>Some friends and I had great conversations when we read Wait But Why articles and talked about them. We made a Meetup to dive deep on similar topics. Join us!</p>
              </div>
              {/* <div className="card">
                <p>Digital products for connecting, communicating, and solving big problems.</p>
              </div>
              <div className="card">
                <p>Physical things like lights, aquaponics systems, and other randoms.</p>
              </div>
              <div className="card">
                <p></p>
              </div> */}
            </div>
          </div>
          <div className="section">
            <h2>Adventures</h2>
            <div className="card-list">
              <div className="card">
                <iframe src="https://www.youtube.com/embed/C-OcMKMY23I?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
              <div className="card">
                <iframe src="https://www.youtube.com/embed/UCwNYGvzR5E?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
              <div className="card">
                <img src={tuscany} alt="Viviano and Peter riding in Viviano's car in Tuscany" className="tuscany"/>
              </div>
            </div>
          </div>
        </body>
        <footer>
          <p>
            Peter Croce lives in NYC with his partner, <a
              href="https://erinpeace.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
                >Erin</a>,
            and works with the good people at <a
              href="https://postlight.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
                >Postlight</a>.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
