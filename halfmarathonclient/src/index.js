import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import {BaseLayout} from './components/BaseLayout'
import {Register} from './components/Register'
import Login from './components/Login'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import {HomePage} from './components/HomePage'
import Schedule from './components/Schedule'
import {BlueSchedule}from './components/BlueSchedule'
import {GreenSchedule}from './components/GreenSchedule'
import {YellowSchedule}from './components/YellowSchedule'
import RedSchedule from './components/RedSchedule'
import {OrangeSchedule}from './components/OrangeSchedule'
import {PurpleSchedule}from './components/PurpleSchedule'
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
    <BaseLayout>
    <Switch>
    <Route path="/" exact component={HomePage} />
    
    <Route exact path="/Register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/schedule" component={Schedule} /> */}
    <Route path="/BlueSchedule" component={BlueSchedule} />
    <Route path="/GreenSchedule" component={GreenSchedule} />
    <Route path="/YellowSchedule" component={YellowSchedule} />
    <Route path="/RedSchedule" component={RedSchedule} />
    <Route path="/OrangeSchedule" component={OrangeSchedule} />
    <Route path="/PurpleSchedule" component={PurpleSchedule} />
     </Switch>
    </BaseLayout>
    </BrowserRouter>
</Provider>









, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
