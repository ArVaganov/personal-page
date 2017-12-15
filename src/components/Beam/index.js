import React from 'react'
import './Beam.css'

const Beam = (props) => {
    let c = props.coordinates
    return (
        <svg className="beam__scene">
            <path className="beam__ray"
                d={`M ${c.x1} ${c.y1} L ${c.x2} ${c.y2} L ${c.x3} ${c.y3} L ${c.x4} ${c.y4}`}
                style={{ stroke: props.color }}
                transform={`translate(${document.body.clientWidth / 2}, 90)`}
            />
            <circle className="beam__collision-point"
                cx={c.x2}
                cy={c.y2}
                r="3"
                transform={`translate(${document.body.clientWidth / 2}, 90)`}
                fill={props.color}
            />
            <circle className="beam__collision-point"
                cx={c.x3}
                cy={c.y3}
                r="3"
                transform={`translate(${document.body.clientWidth / 2}, 90)`}
                fill={props.color}
            />
        </svg>
    )
}

export default Beam