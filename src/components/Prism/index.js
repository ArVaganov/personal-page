import React from 'react'
import './Prism.css'
import { withRouter } from 'react-router-dom'

const getAngleForGear = (pathname) => {
    switch(pathname) {
        case '/skills': return 32;
        case '/about': return 122;
        case '/log': return 212;
        default: return 0;
    }
}

const Prism = ({ location, ...props}) => {
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

            <g transform={`translate(${document.body.clientWidth / 2}, 98)`}>
                <circle className="prism__circle_outer"
                    cx="0"
                    cy="0"
                    r={props.radius + 8.5}
                    style={{transform: `rotate(${getAngleForGear(location.pathname)}deg)`}}
                />
            </g>

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

export default withRouter(Prism);