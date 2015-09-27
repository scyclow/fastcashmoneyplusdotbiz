import React from 'react';
import 'babel-core/polyfill';
import App from './components/App';

window.React = React;
React.render(<App />, document.getElementById('app'));
