//this is the real deal
import React, { Component } from 'react';
var sc = require('soundcloud-audio')
var scPlayer = new sc ('ca7d694602e0356e3a9a3207eaead072');

scPlayer.resolve('https://soundcloud.com/djangodjango/first-light', function (track) {
    console.log(track); 
});


class App extends Component {
  render() {
    return (
      <h1>lol</h1>
    );
  }
}

export default App;
