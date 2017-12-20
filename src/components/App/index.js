import React from 'react'
import SkillsPage from '../../components/SkillsPage'
import AboutPage from '../../components/AboutPage'
import LogPage from '../../components/LogPage'
import PortfolioPage from '../../components/PortfolioPage'
import Navigation from '../../components/Navigation'
import '../../shared/bootstrap-grid.css'
import './App.css'

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

const App = () => (
    <Router>
        <div>
            <Switch>
                <Navigation />
            </Switch>
            
            <Route path="/" exact component={() => <Redirect to="/skills" />} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/log" component={LogPage} />
        </div>
    </Router>
)

export default App