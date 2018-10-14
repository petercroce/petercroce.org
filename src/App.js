import React, { Component } from 'react';
import pSign from './pc-sign.svg';
import tuscany from './imgs/tuscany.jpg';
import italianPassport from './imgs/italian-passport.jpg';
import umbn from './imgs/umbn.png';
import wbwnyc from './imgs/wbwnyc.jpg';
import './App.css';
import './normalize.css';

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
          </div>
          <div className="section">
            <h2 className="no-margin-bottom">Some of those things are listed here</h2>
            <div className="card-list">
              <div className="card">
                <h3>Italian Citizenship Guide</h3>
                <img src={italianPassport} alt="My Italian passport"/>
                <p>Descendents of Italian citizens can get dual EU citizenship.
                  It took me four years and thousands of hours of research to
                  navigate the system and get my passport so I made a step-by-step
                  guide to make it easier for others.</p>
                <div>
                  <a href="https://italiancitizenshipguide.com" target="_blank" rel="noopener noreferrer nofollow"
                  >Italian Citizenship Guide</a>
                </div>
              </div>
              <div className="card">
                <h3>Wait But Why NYC</h3>
                <img src={wbwnyc} alt="Wait But Why NYC cover art"/>
                <p>After some friends and I started reading <a
                  href="https://waitbutwhy.com" target="_blank" rel="noopener noreferrer nofollow"
                  >Wait But Why</a> articles and talking about them we wanted to
                  do it with more people too. We made a Meetup to discuss and
                  hear presentations on similar topics. Join us!</p>
                <div>
                  <a href="http://waitbutwhy.nyc" target="_blank" rel="noopener noreferrer nofollow"
                  >Wait But Why NYC</a>
                </div>
              </div>
              <div className="card">
                <h3>UMBN</h3>
                <img src={umbn} alt="People laugh during a workshop facilitated by UMBN"/>
                <p>After working together as facilitators at <a
                  href="http://thedali.org/programs/innovation-labs/" target="_blank" rel="noopener noreferrer nofollow"
                  >The Dali Museum Innovation Lab</a> in St. Petersburg, Florida,
                  Annemarie Boss and I started a creative problem solving facilitation
                  consultancy. She's very good at it.</p>
                <div>
                  <a href="https://umbn.co" target="_blank" rel="noopener noreferrer nofollow"
                  >UMBN's website</a>
                </div>
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
            <div className="card-list-slider">
              <div className="card">
                <iframe src="https://www.youtube.com/embed/C-OcMKMY23I?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Teleporting around Scotland and Wales with a GoPro"></iframe>
              </div>
              <div className="card">
                <iframe src="https://www.youtube.com/embed/UCwNYGvzR5E?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Six weeks living and working on a sailboat"></iframe>
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
