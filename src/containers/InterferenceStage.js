import React, { Component } from 'react'
import Prism from '../components/Prism'

class InerferenceStage extends Component {
    constructor() {
        super()

        this.state = {
            prismAngle: 0,
            prismRadius: 80,
            prismDecartCoordinates: {}
        }
    }

    componentWillMount() {
        this.computePrismCords()
    }

    componentDidMount() {
        setInterval(this.rotatePrism, 10)
    }

    rotatePrism = () => {
        this.setState(prevState => {
            return prevState.prismAngle > 2 * Math.PI ? {prismAngle: 0} : {prismAngle: prevState.prismAngle + 0.01}
        }, () => {
            this.computePrismCords()
        })
    }

    computePrismCords = () => {
        this.setState(() => {
            let {prismAngle, prismRadius} = this.state
            let [firstPointAngle, secondPointAngle, thirdPointAngle] = ((prismAngle) => {

                return [
                    prismAngle,
                    prismAngle + 2 * Math.PI/3,
                    prismAngle + 4 * Math.PI/3
                ]
            })(prismAngle)

            return {
                prismDecartCoordinates: {
                    A: `${Math.cos(firstPointAngle) * prismRadius}, ${Math.sin(firstPointAngle) * prismRadius}`,
                    B: `${Math.cos(secondPointAngle) * prismRadius}, ${Math.sin(secondPointAngle) * prismRadius}`,
                    C: `${Math.cos(thirdPointAngle) * prismRadius}, ${Math.sin(thirdPointAngle) * prismRadius}`
                }
            }
        })
    }
    
    render() {

        return (
            <Prism coordinates={this.state.prismDecartCoordinates} radius={this.state.prismRadius}/>
        )
    }
}

export default InerferenceStage