import React from 'react';
import outerSpace from './space.jpg';
import { Link } from 'react-router-dom';
import outboundBlack from './outbound_black.png';
function About(props) {
  return <div id="About" className="layout">
    <h1>Eden Fenn</h1>
    <h2>the dweller's house</h2>
    <div class="about-content">
      <p>I'm seeking representation for <strong>The Dweller's House</strong>, a young adult science fiction novel about interstellar youth missionaries.</p>
      <p><em>The Dweller's House</em> combines an ensemble adventure epic and robust LGBTQ+ cast, a la <em>Steven Universe</em>, with <em>The Poisonwood Bible's</em> deep critique of religious proselytization and savior narratives. The book draws on five years of my experience as a teenage missionary with major evangelical organizations.</p>

      <p>Agents, <a href="mailto:eden@edenfenn.com"><span className="about-link">get in touch <img src={outboundBlack}></img></span></a> to request the full query letter and chapters from the novel!</p>
    </div>
    <img src={outerSpace} className="portrait small" alt="outer space" />

  </div>;
}
export default About;