import React from 'react'
import SkillsPage from '../SkillsPage'
import AboutPage from '../AboutPage'
import LogPage from '../LogPage'
import Navigation from '../Navigation'
import Footer from '../Footer'
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
            <Route path="/log" component={LogPage} />

            <Footer />
        </div>
    </Router>
)

export default App