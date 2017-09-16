import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';

const Appp = () => (
    <MuiThemeProvider>
        <Login />
    </MuiThemeProvider>
);

ReactDOM.render(<Appp />, document.getElementById('root'));
registerServiceWorker();

// Hot Module Reloading - reloads the appplication and not the page
if (module.hot) {
    module.hot.accept()
}
