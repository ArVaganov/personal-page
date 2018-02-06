import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '../../configureStore';
import Footer from '../Footer'
import LogPage from '../LogPage'
import AboutPage from '../AboutPage'
import SkillsPage from '../SkillsPage'
import NavigationContainer from '../../containers/NavigationContainer'
import InterferenceStageContainer from '../../containers/InterferenceStageContainer'


import '../../shared/bootstrap-grid.css'
import './App.css'

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'


const App = () => (
    <Provider store={configureStore()}>
        <Router>
            <div className="react-app">
                <Switch>
                    <NavigationContainer />
                </Switch>
                <InterferenceStageContainer />
                <Route path="/" exact component={() => <Redirect to="/skills" />} />
                <Route path="/skills" component={SkillsPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/log" component={LogPage} />
                <Footer />
            </div>
        </Router>
    </Provider>
)

export default App