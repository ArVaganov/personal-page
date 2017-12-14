import React from 'react'
import './Prism.css'

const Prism = (props) => {
    let { A, B, C } = props.coordinates
    return (
        <svg>
            <circle cx="0"
                cy="0"
                r={props.radius - 10}
                transform={`translate(${document.body.clientWidth / 2}, 90)`}
                fill="transparent"
                stroke='dimgray'
                strokeWidth='2' />
            <polygon points={`${A[0]},${A[1]}, ${B[0]},${B[1]}, ${C[0]},${C[1]}`} transform={`translate(${document.body.clientWidth / 2}, 90)`} />
        </svg>
    )
}

export default Prism;