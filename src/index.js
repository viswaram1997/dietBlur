import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/store";
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import './assets/css/style.css';
import './assets/css/responsive.css';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));
registerServiceWorker();
