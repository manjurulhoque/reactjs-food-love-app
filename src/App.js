import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import Submit from './Submit';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

class App extends Component {
    render() {
        return (
            <div className="App container">
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/submit' component={Submit} history={history}/>
                </Switch>
            </div>
        );
    }
}

export default App;
