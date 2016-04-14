import React from 'react';
import config from '../config/APIconfig';
import date from '../config/date';
import headers from '../config/request-helpers';
import Photos from '../containers/Photos';
import $ from 'jquery';

const Main = React.createClass({
  getInitialState: function() {
    return {
      rover: "curiosity",
      date: date(),
      photos: [],
      camera: '',
    }
  },

  componentDidMount: function() {
    $.ajax({
      url: config.url + 'rovers/' + this.state.rover + '/photos?earth_date=' + this.state.date + this.state.camera + '&api_key=' + config.api,
      // headers: headers,
      success: function(data) {
        console.log(data);
      }
    })
   },

  render: function() {
    return (
      <div>
        <h3>Mars Rover Photos</h3>
        <p>Curiosity has been active since August 6, 2012. Opportunity, aka Mars Exploration Rover -B, is the twin to Spirit and has been operating since January 26, 2004. Spirit, aka Mars Exploration Rover -A, is a robotic rover on Mars, active from January 5, 2004 - March, 21, 2010.</p>
      </div>
    )
  }
});

export default Main;
