'use strict';

const cards = require('./index');
const fs = require('fs');

const data = Object.freeze({
  
  location: 'Porthcawl Rest Bay',
  subheader: 'August 15th 2015',
  swell: ['1-2', '1-4', '2-3', '4-5', '1-2', '1-2'],
  time: ['10am', '12pm', '2pm', '4pm', '6pm', '1-2'],
  windspeed: ['11', '10', '13', '33', '19', '1-2'],
  webcamLink: 'http://magicseaweed.com/Live-Porthcawl-Rest-Bay-Webcam/13/Embed/'

});

const card = cards.build(data);

fs.writeFile('out.html', card);