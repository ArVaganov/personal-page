import React from 'react';
import Prism from '../../components/Prism'
import './InterferenceStage.css'

const InterferenceStage = (props) => {
    return (
        <section className="interference-stage">
            <Prism {...props.prism} />
            {props.beams}
        </section>
    )
}

export default InterferenceStage