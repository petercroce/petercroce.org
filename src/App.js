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
            <a href="https://linkedin.com/in/pscroce" target="_blank" rel="noopener noreferrer"
              className="linkedin">LinkedIn</a>
            <a href="http://waitbutwhy.nyc" target="_blank" rel="noopener noreferrer"
              className="meetup">Meetup</a>
          </div>
        </header>
        <body>
          <div className="section">
            <div className="welcome-section">
              <h1>Hello! I'm Peter Croce. </h1>
            </div>
          </div>

          <div className="section -paragraph">
            <p>I'm a tinkerer, product manager, cultural enthusiast, and lover of the outdoors.</p>
            <p>As a product manager, I'm currently working with the good people at <a href="https://postlight.com" target="_blank" rel="noopener noreferrer">Postlight</a> in New York City. Before that I worked as a product manager for the design-first digital product agency, <a href="https://www.ny-ave.com/" target="_blank" rel="noopener noreferrer">New York Ave</a>. During that time I also worked part-time as a facilitator of design sprint workshops for <a href="http://thedali.org/programs/innovation-labs/" target="_blank" rel="noopener noreferrer">The Dali Museum Innovation Labs</a> in St. Petersburg, Florida.</p>
          </div>

          <div className="section -paragraph">
            <h2>Where I'm Headed and Why</h2>
            <p>I do the work I do because I plan to use business and technology as a force for not just doing well but for doing good for people and the life systems on which we rely. Lofty? Yeah. But it keeps me going for now.</p>
            <p>In the meantime, I started a Meetup to talk about some of those things. It's called <a href="http://wbw.nyc" target="_blank" rel="noopener noreferrer">Wait But Why NYC</a>. Before that I co-founded and sat on the board of an organization teaching social enterprise at Stetson University called Ethical Incubator, participated in an international community of enterprise-minded changemakers called <a href="http://startingbloc.org/" target="_blank" rel="noopener noreferrer">StartingBloc</a> and another one called <a href="https://www.globalshapers.org/" target="_blank" rel="noopener noreferrer">Global Shapers</a>, an initiative by the World Economic Forum to bring together young people driving dialogue, action, and progress.</p>
          </div>
          <div className="section">
          <h2>Side Projects</h2>
            <div className="card-list">
              <div className="card">
                <h3>Italian Citizenship Guide</h3>
                <a href="https://italiancitizenshipguide.com" target="_blank" rel="noopener noreferrer nofollow"
                ><img src={italianPassport} alt="My Italian passport"/></a>
                <p>Descendents of Italian citizens can get Italian citizenship.
                  It took me a long time and was not easy to do so I made this guide to make it easier for others. It's a work in progress.</p>
                <div>
                  <a href="https://italiancitizenshipguide.com" target="_blank" rel="noopener noreferrer nofollow"
                  >Italian Citizenship Guide</a>

                </div>
              </div>
              <div className="card">
                <h3>Wait But Why NYC</h3>
                <a href="http://waitbutwhy.nyc" target="_blank" rel="noopener noreferrer nofollow"
                ><img src={wbwnyc} alt="Wait But Why NYC cover art"/></a>
                <p>Some friends and I started meeting up to talk about topics covered in <a
                  href="https://waitbutwhy.com" target="_blank" rel="noopener noreferrer nofollow"
                  >Wait But Why</a> articles and it snowballed into a larger Meetup. Now we meet every few months to hear speakers and think out loud together. You are very welcome to join us or refer a speaker.</p>
                <div>
                  <a href="http://waitbutwhy.nyc" target="_blank" rel="noopener noreferrer nofollow"
                  >Wait But Why NYC</a>
                </div>
              </div>
              <div className="card">
                <h3>UMBN</h3>
                <a href="https://umbn.co" target="_blank" rel="noopener noreferrer nofollow"
                ><img src={umbn} alt="People laugh during a workshop facilitated by UMBN"/></a>
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
            <div className="card-list">
              <div className="card">
                <iframe src="https://www.youtube.com/embed/C-OcMKMY23I?rel=0" frameborder="0" allow="encrypted-media; fullscreen" allowfullscreen title="Teleporting around Scotland and Wales with a GoPro"></iframe>
                <p>Mighty craic teleporting around the emerald isle with this lad. Castles, writers, cliffs, sheep, hiking, hitchhiking with famous Scottish climbers, staying in bothies, waking up on the edge of the world.</p>
              </div>
              <div className="card">
                <iframe src="https://www.youtube.com/embed/UCwNYGvzR5E?rel=0" frameborder="0" allow="encrypted-media; fullscreen" allowfullscreen title="Six weeks living and working on a sailboat"></iframe>
                <p>Tales of sailing a 46' catamaran from Tampa to Key West to Dominican Republic to Puerto Rico, week-long open water voyages with four hour shifts at the helm day and night, musical shenanigans, and the best people.</p>
              </div>
              <div className="card">
                <img src={tuscany} alt="Viviano and Peter riding in Viviano's car in Tuscany" className="tuscany"/>
                <p>Six weeks living and working on a vinyard and olive oil farm in Tuscany, hanging out with baby goats and donkeys, learning Italian, and being interviewed on European television about work-travel.</p>
              </div>
            </div>
          </div>
          <div className="section -paragraph">
            <h2>Good Communication</h2>
            <p>is just as stimulating as black coffee, and just as hard to sleep after.</p>
            <p>Say hello: pscroce@gmail.com</p>
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
