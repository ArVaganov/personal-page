import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import InterferenceStageContainer from '../../containers/InterferenceStageContainer'
import './FrontPage.css'


class FrontPage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <InterferenceStageContainer />
            </div>
        );
    }
}

export default FrontPage;