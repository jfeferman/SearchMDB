import React from 'react';
import ReactDOM from 'react-dom';
import createContainer from './createContainer';
import { HomePage } from './components/pages';

// eslint-disable-next-line no-unused-vars
const ioc = createContainer();

ReactDOM.render(<HomePage />, document.getElementById('root'));
