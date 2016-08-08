import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return <input type="button" value="eallo"></input>;
  }
}

document.addEventListener('deviceready', function() {
  ReactDOM.render(<Button />, document.getElementById('main'));
}, false);
