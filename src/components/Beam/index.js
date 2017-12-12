import React from 'react'
import './Beam.css'

const Beam = (props) => {
    return (
        <svg style={{ position: 'absolute', left: 0 }}>
            <line {...props.coordinates} style={{ stroke: props.color }} transform={`translate(${document.body.clientWidth / 2}, 90)`} />
        </svg>
    )
}

export default Beam