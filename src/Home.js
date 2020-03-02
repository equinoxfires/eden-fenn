import React from 'react';
import portrait from './eden.png';
function Welcome(props) {
  return <div id="Home" className="layout">
    <h1>Eden Fenn</h1>
    <h2>dispatches from probable futures</h2>
    <img src={portrait} className="portrait" alt="photograph of Eden Fenn" />
  </div>;
}
export default Welcome;