import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import InterferenceStage from '../../containers/InterferenceStage'
import './FrontPage.css'


class FrontPage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <InterferenceStage />
            </div>
        );
    }
}

export default FrontPage;