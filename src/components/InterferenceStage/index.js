import React from 'react';
import Prism from '../../components/Prism'
import './InterferenceStage.css'

const InterferenceStage = (props) => {
    return (
        <svg className="interference-stage">
            <Prism {...props.prism} />
            {props.beams}
        </svg>
    )
}

export default InterferenceStage