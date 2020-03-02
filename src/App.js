import React, { useRef, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  handleCity,
  handleHover,
  handleHoverExit,
  staggerGrid
} from './components/Animations';

import gsap from 'gsap';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  useEffect(() => {
    const gridArr = document.getElementsByClassName('grid-item');
    staggerGrid(gridArr);
  }, []);
  return (
    <div className="solutions">
      <p>Solutions that help you.</p>

      <div class="grid-layout">
        <div class="grid-item grid-item-1 logo">Logo</div>
        <div class="grid-item grid-item-2 vid">Video</div>
        <div class="grid-item span-3 grid-item-3 web-dev">Web Development</div>
        <div class="grid-item grid-item-4">Facebook</div>
        <div class="grid-item span-2 grid-item-5">Buisness Consultancy</div>
        <div class="grid-item grid-item-6">Google</div>
        <div class="grid-item grid-item-7">Instagram</div>
        <div class="grid-item grid-item-8">Print</div>
        <div class="grid-item grid-item-9">Branding</div>
        <div class="grid-item grid-item-11">Youtube</div>
      </div>
    </div>
  );
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  useEffect(() => {
    gsap.from('.wrapper h5 ', {
      duration: 0.8,
      y: 100,
      opacity: 0,
      delay: 0.25,
      ease: 'power3.inOut',
      stagger: {
        amount: 1
      }
    });
  }, []);
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          The <b>I G N I S</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </div>
  );
}
export default App;
