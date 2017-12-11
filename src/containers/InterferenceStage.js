import React, { Component } from 'react'
import Prism from '../components/Prism'

class InerferenceStage extends Component {
    constructor() {
        super()

        this.state = {
            angle: 0,
            radius: 80,
            prismDecartCords: {}
        }
    }

    componentWillMount() {
        let {angle, radius} = this.state
        this.computePrismCords(angle, radius)
    }

    componentDidMount() {
        setInterval(this.rotatePrism, 10)
    }

    rotatePrism = () => {
        this.setState(prevState => {
            return prevState.angle > 2 * Math.PI ? {angle: 0} : {angle: prevState.angle + 0.01}
        }, () => {
            this.computePrismCords(this.state.angle, this.state.radius)
        })
    }

    computePrismCords = (angle, radius) => {
        this.setState(() => {
            let [first, second, third] = ((angle) => {
                return [
                    angle,
                    2 * Math.PI/3 + angle,
                    4 * Math.PI/3 + angle
                ]
            })(angle)

            return {
                prismDecartCords: {
                    A: `${Math.cos(first) * radius}, ${Math.sin(first) * radius}`,
                    B: `${Math.cos(second) * radius}, ${Math.sin(second) * radius}`,
                    C: `${Math.cos(third) * radius}, ${Math.sin(third) * radius}`
                }
            }
        })
    }
    
    render() {

        return (
            <Prism coordinates={this.state.prismDecartCords} radius={this.state.radius}/>
        )
    }
}

export default InerferenceStage