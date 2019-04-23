import React, { Component } from 'react';
import tuscany from './imgs/tuscany.jpg';
import pSign from './pc-sign.svg';
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
            <a href="https://linkedin.com/in/pscroce" target="_blank" rel="noopener noreferrer"
              className="linkedin">LinkedIn</a>
            <a href="https://www.meetup.com/Wait-But-Why-NYC" target="_blank" rel="noopener noreferrer"
              className="meetup">Meetup</a>
          </div>
        </header>
        <body>
          <div className="section -paragraph">
            <div className="welcome-section">
              <h1><span className="mobile-break">Hello. </span>I'm Peter Croce.</h1>
              <p>I'm a product manager, maker, and lover of the outdoors.</p>
            </div>
          </div>

          <div className="section -paragraph">
            <p>I currently work with the good people at <a href="https://postlight.com" target="_blank" rel="noopener noreferrer">Postlight</a> in New York City.</p>
            <p>Prior, I worked with <a href="https://www.ny-ave.com/" target="_blank" rel="noopener noreferrer">New York Ave</a> and <a href="https://thedali.org/innovation" target="_blank" rel="noopener noreferrer">The Dali Museum Innovation Labs</a> and served in AmeriCorps measuring businesses' environmental impact and offering custom efficiency recommendations. </p>
            <p>Before that, I slowly work-traveled and hitchiked through parts of Europe while working freelance as a front-end software engineer, lived and worked on a sailboat and made <a href="https://www.youtube.com/watch?v=UCwNYGvzR5E&t" target="_blank" rel="noopener noreferrer">a video that excludes all the hard and gross parts</a>, <a href="https://www.youtube.com/watch?v=C-OcMKMY23I" target="_blank" rel="noopener noreferrer">teleported around Scotland and Wales</a>, and got degrees at University of Florida in psychology and criminology.</p>
            <p>I like people a lot and I like thinking about what sorts of experiences people find useful and fulfilling. Right now, I'm most focused on how technology fits there.</p>
          </div>

          <div className="section -paragraph">
            <h2>Where I come from and where I'm going</h2>
            <p>My product work so far has involved financial, media, and non-profit verticals. I've had the pleasure of working with teams of incredibly talented people to create marketplaces, publishing platforms, and even a birdwatching app.</p>
            <p>By listening to and working directly with stakeholders, I turn undefined or roughly-defined goals into strategies and tactics to create excellent experiences and data-rich, API-driven applications that always ship.</p>
            <p>I do the work I do because I plan to use business and technology as a force for not just doing well but doing good.</p>
          </div>
          <div className="section -paragraph">
            <h2>How I'm getting there</h2>
            <p>Wherever I go I like to build community around shared interests. In 2016, I co-founded Overlap, a non-profit organization that helps local businesses qualify and apply for B Corporation certification. By involving Stetson University in the effort, we were able to involve passionate students and ensure the continuation of the organization’s mission.</p>
            <p>In New York, I started <a href="https://www.meetup.com/Wait-But-Why-NYC" target="_blank" rel="noopener noreferrer">Wait But Why NYC</a>, a group that gets together to talk about some of the big, unwieldy topics covered on the blog <a href="https://waitbutwhy.com">Wait But Why</a>. I also participate in StartingBloc, an international community of socially minded entrepreneurs, and Global Shapers, a World Economic Forum association that brings young people together to design and implement community projects around the world.</p>
          </div>
          <div className="section -paragraph">
            <h2>Say Hello: <a href="mailto:pscroce@gmail.com">pscroce@gmail.com</a></h2>
          </div>
        </body>
      <div className="section">
        <footer>
          <p>
            Peter lives in Brooklyn with his partner, <a
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
      </div>
    );
  }
}

export default App;
