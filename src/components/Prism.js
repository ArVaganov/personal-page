import React from 'react'

const Prism = (props) => {
    let {A, B, C} = props.coordinates
    let prismStyles = {fill: 'rgba(179, 179, 179, 0.1)', stroke: 'lightgray', strokeWidth:2}
    return (
        <svg height={props.radius * 2} width={props.radius * 2}>
            <circle cx="0"
                    cy="0" 
                    r={props.radius - 10}
                    transform={`translate(${props.radius}, ${props.radius})`} 
                    fill="transparent"
                    stroke='dimgray'
                    strokeWidth='2'/>
            <polygon points={`${A}, ${B}, ${C}`} style={prismStyles} transform={`translate(${props.radius}, ${props.radius})`}/>
        </svg>
    )
}

export default Prism;