import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Hot Module Reloading - reloads the appplication and not the page
if (module.hot) {
    module.hot.accept()
}
