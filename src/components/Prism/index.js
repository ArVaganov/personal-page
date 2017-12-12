import React from 'react'
import './Prism.css'

const Prism = (props) => {
    let { A, B, C } = props.coordinates
    return (
        <svg>
            <circle cx="0"
                cy="0"
                r={props.radius - 10}
                transform="translate(200, 90)"
                fill="transparent"
                stroke='dimgray'
                strokeWidth='2' />
            <polygon points={`${A}, ${B}, ${C}`} transform="translate(200, 90)" />
        </svg>
    )
}

export default Prism;