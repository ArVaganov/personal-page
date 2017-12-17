import React from 'react'
import SkillsPage from '../../components/SkillsPage'
import BioPage from '../../components/BioPage'
import LogPage from '../../components/LogPage'
import PortfolioPage from '../../components/PortfolioPage'
import Navigation from '../../components/Navigation'

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import './App.css'

const App = () => (
    <Router>
        <div>
            <Switch>
                <Navigation />
            </Switch>
            <Route path="/" exact component={() => <Redirect to="/skills" />} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/bio" component={BioPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/log" component={LogPage} />
        </div>
    </Router>
)

export default App