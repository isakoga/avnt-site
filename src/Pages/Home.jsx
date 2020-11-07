import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../Images/image00071_.jpeg';
import JournalImg from '../Images/RANHURA 3.svg'
import '../style/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="left-container">
          <div className="home-link">
            <Link className="left-link" to="/">AVNT</Link>
          </div>
          <div className="image-link">
            <img src={HomeImg} alt="trauma-003" className="home-image" />
            <legend>Trauma 003</legend>
          </div>
          <div className="nav-link">
            <div className="nav-image"></div>
            <div className="nav-bar">
              <Link className="left-link" to="/about">ABOUT</Link>
              <br />
              <Link className="left-link" to="/contact">CONTACT</Link>
              <br />
              <Link className="left-link" to="/submissions">SUBMISSIONS</Link>
              <br />
              <Link className="left-link" to="/contributors">CONTRIBUTORS</Link>
            </div>
          </div>
        </div>
        <div className="right-container">
          <Link className="right-link" to="/network">THE NETWORK</Link>
          <br />
          <Link className="right-link" to="/residents">RESIDENTS</Link>
          <br />
          <img src={JournalImg} alt="journal" width="450px" className="journal-image" />
          <Link className="right-link journal-link" to="/journal">JOURNAL</Link>
          <br />
          <Link className="right-link" to="/archives">PROJECTS ARCHIVES</Link>
        </div>
      </div>
    );
  }
}

export default Home;
