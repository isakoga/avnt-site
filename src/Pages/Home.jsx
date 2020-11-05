import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../Images/image00071_.jpeg';
import '../style/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="left-container">
          <div className="home-link">
            <span>AVNT</span>
          </div>
          <div className="image-link">
            <img src={HomeImg} alt="trauma-003" className="home-image" />
          </div>
          <div className="nav-link">
            <div className="nav-image"></div>
            <div className="nav-bar">
              <Link className="link" to="/about">ABOUT</Link>
              <br />
              <Link className="link" to="/contact">CONTACT</Link>
              <br />
              <Link className="link" to="/submissions">SUBMISSIONS</Link>
              <br />
              <Link className="link" to="/contributors">CONTRIBUTORS</Link>
            </div>
          </div>
        </div>
        <div className="right-container">
          <Link className="link" to="/network">THE NETWORK</Link>
          <br />
          <Link className="link" to="/residents">RESIDENTS</Link>
          <br />
          <Link className="link" to="/journal">JOURNAL</Link>
          <br />
          <Link className="link" to="/archives">PROJECTS ARCHIVES</Link>
        </div>
      </div>
    );
  }
}

export default Home;
