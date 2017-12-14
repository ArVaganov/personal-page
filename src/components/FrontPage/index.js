import React, { Component } from 'react'
import InterferenceStage from '../../containers/InterferenceStage'
import './FrontPage.css'


class FrontPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <InterferenceStage />
                </div>
                <p className="App-intro">
                    Welcome to ArVaganov personal webpage
        </p>
            </div>
        );
    }
}

export default FrontPage;