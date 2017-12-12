import React, { Component } from 'react'
import Prism from '../../components/Prism'
import Beam from '../../components/Beam'

class InerferenceStage extends Component {
    constructor() {
        super()

        this.state = {
            prismAngle: 0,
            prismRadius: 80,
            prismDecartCoordinates: {},
            beams: [
                {
                    color: '#ca7c7c',
                    yAxis: -15,
                    angle: 0
                },
                {
                    color: '#65ad65',
                    yAxis: -5,
                    angle: -0
                },
                {
                    color: '#5f98bb',
                    yAxis: 5,
                    angle: 0
                },
                {
                    color: '#b75ab7',
                    yAxis: 15,
                    angle: 0
                },

            ]
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
            return prevState.prismAngle > 2 * Math.PI ? { prismAngle: 0 } : { prismAngle: prevState.prismAngle + 0.01 }
        }, () => {
            this.computePrismCords()
        })
    }

    computePrismCords = () => {
        this.setState(() => {
            let { prismAngle, prismRadius } = this.state
            let [firstPointAngle, secondPointAngle, thirdPointAngle] = ((prismAngle) => {

                return [
                    prismAngle,
                    prismAngle + 2 * Math.PI / 3,
                    prismAngle + 4 * Math.PI / 3
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

    computeSecondCords = (el) => {
        let y2 = el.yAxis + 1200 * Math.tan(el.angle)
        return { x2: 0, y2: y2 }
    }

    render() {
        let beams = this.state.beams.map((el, index) => <Beam
            coordinates={{ x1: -document.body.clientWidth / 2, y1: el.yAxis, ...this.computeSecondCords(el) }}
            key={index}
            color={el.color} />)

        return (
            <div>
                <Prism coordinates={this.state.prismDecartCoordinates} radius={this.state.prismRadius} />
                {beams}
            </div>
        )
    }
}

export default InerferenceStage