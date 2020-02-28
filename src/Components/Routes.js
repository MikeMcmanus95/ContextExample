import React, {useContext} from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Body';
import About from './About/Body';
import MainHeader from './MainHeader';



export const Routes = () => {
    return (
        <div>
            <Router>
            <MainHeader/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Router>
        </div>
    )
}
