import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/menu';
import About from './components/about';
import Contact from './components/contact';
import { BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker'


ReactDOM.render( 
    <BrowserRouter basename="/the-foodplace">
        <div>
            <Route exact path="/" component = {App}/>
            <Route exact path="/menu" component = {Menu}/>
            <Route exact path="/about" component = {About}/>
            <Route exact path="/contact" component = {Contact}/>
        </div>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
