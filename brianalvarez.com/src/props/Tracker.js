import React from 'react';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-99818693-1', {debug: true});

function logPageView() {
  //console.log("logging page view");
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

class Tracker extends React.Component {
  render() {
    if(this.props.extra){
      console.log(this.props.extra)
      ReactGA.set({customValue: this.props.extra})
    }
    logPageView();
    return null;
  }
}
export default Tracker