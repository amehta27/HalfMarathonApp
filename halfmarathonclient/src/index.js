import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import {BaseLayout} from './components/BaseLayout'
import {Register} from './components/Register'
// import {ViewAllReceipe} from './components/ViewAllReceipe'
// import {HomePage} from './components/HomePage'

ReactDOM.render(
    <BrowserRouter>
    <BaseLayout>
    <Switch>
    {/* <Route path="/" exact component={HomePage} /> */}
    <Route path="/" component={Register} />
    {/* <Route path="/add-receipe" component={AddReceipe} /> */}

     </Switch>
    </BaseLayout>
    </BrowserRouter>









, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
