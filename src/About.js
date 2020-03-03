import React from 'react';
import portrait from './eden.png';
import { Link } from 'react-router-dom';
import outboundBlack from './outbound_black.png';
function About(props) {
  return <div id="About" className="layout">
    <h1>Eden Fenn</h1>
    <h2>all about me</h2>
    <div class="about-content">
      <p><strong>Eden Fenn</strong> (she/they) is a science fiction writer and software developer. She lives in Baltimore with her wife and a very bad dog.</p>
      <p>Eden was born in Danvers, Massachusetts, a mile from Rebecca Nurse's house. Rebecca was hanged in the Salem Witch Trials; Eden has not yet been caught.</p>
      <p><Link to="/novel" className="about-link" onClick={() => { props.setRoute('novel') }}><em>The Dweller's House</em></Link> is Eden's current project.</p>
      <p>Eden's <Link to="/stories" className="about-link" onClick={() => { props.setRoute('stories') }}>short stories</Link> have appeared or are forthcoming in <em>Nature Futures</em>, <em>Daily Science Fiction</em>, and <em>Asimov's Science Fiction Magazine</em>.</p>
      <p>While studying at Temple University, Eden started the writing tips blog <a href="http://prosepro.tips"><span className="about-link">Prose Protips <img src={outboundBlack}></img></span></a> and wrote two young adult dystopian novels, <a href="https://www.goodreads.com/book/show/13176257-mutt"><span className="about-link"><em>Mutt</em> <img src={outboundBlack}></img></span></a> and <a href="https://www.goodreads.com/book/show/17407180-stray"><span className="about-link"><em>Stray</em> <img src={outboundBlack}></img></span></a>. Thanks to dozens of book bloggers on Tumblr, these self-published books won over 9,000 readers.</p>
      <p><strong><em>let's create together //</em></strong><br /><a href="mailto:eden@edenfenn.com"><span className="about-link">email <img src={outboundBlack}></img></span></a> <a href="https://twitter.com/edenfenn"><span className="about-link">twitter <img src={outboundBlack}></img></span></a> <a href="https://instagram.com/eden.fenn"><span className="about-link">instagram <img src={outboundBlack}></img></span></a></p>

    </div>
    <img src={portrait} className="portrait small" alt="photograph of Eden Fenn" />

  </div>;
}
export default About;