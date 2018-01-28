import React from 'react'
import './Prism.css'

const Prism = (props) => {
    let { A, B, C } = props.coordinates
    return (
        <g className="prism">
            <g transform={`translate(${document.body.clientWidth / 2}, 98)`}>
                <circle className="prism__circle_inner"
                    cx="0"
                    cy="0"
                    r={props.radius - 4}
                />
            </g>

            <circle className="prism__circle"
                cx="0"
                cy="0"
                r={props.radius - 14}
                transform={`translate(${document.body.clientWidth / 2}, 98)`}
            />

            <circle className="prism__circle_outer"
                cx="0"
                cy="0"
                r={props.radius + 6.5}
                transform={`translate(${document.body.clientWidth / 2}, 98)`}
            />

            <circle className="prism__circle"
                cx="0"
                cy="0"
                r={props.radius + 6}
                transform={`translate(${document.body.clientWidth / 2}, 98)`}
            />
            <polygon className="prism__shape"
                points={`${A[0]},${A[1]}, ${B[0]},${B[1]}, ${C[0]},${C[1]}`}
                transform={`translate(${document.body.clientWidth / 2}, 98)`}
            />
        </g>
    )
}

export default Prism;