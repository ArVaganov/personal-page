import React, { Component } from 'react'
import InterferenceStage from '../components/InterferenceStage'
import Beam from '../components/Beam'

(function() {
    const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

class InterferenceStageContainer extends Component {
    constructor() {
        super()

        this.state = {
            prismAngle: 0,
            prismRadius: 75,
            prismDecartCoordinates: {},
            beams: [
                { color: '#ca7c7c', yAxis: -22 },
                { color: '#5f98bb', yAxis: 0 },
                { color: '#b75ab7', yAxis: 22 },
            ]
        }
    }

    componentWillMount() {
        this.computePrismCords()
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.state.rotationId)
    }

    animate = (draw) => {
        this.setState({rotationId: requestAnimationFrame(function rotatePrism(time) {
                draw()
                requestAnimationFrame(rotatePrism)
            })
        })
    }

    componentDidMount() {
        this.animate(this.rotatePrism)
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
                    A: [Math.cos(firstPointAngle) * prismRadius, Math.sin(firstPointAngle) * prismRadius],
                    B: [Math.cos(secondPointAngle) * prismRadius, Math.sin(secondPointAngle) * prismRadius],
                    C: [Math.cos(thirdPointAngle) * prismRadius, Math.sin(thirdPointAngle) * prismRadius]
                }
            }
        })
    }

    computeStraitCollision = (x1, y1, x2, y2, x3, y3, x4, y4) => {
        let x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) /
            ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
        let y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) /
            ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))

        return [x, y]
    }

    collisionsArrayFormation = (x1, y1, x2, y2) => {
        let { A, B, C } = this.state.prismDecartCoordinates
        let collisions = []
        collisions.push(this.computeStraitCollision(x1, y1, x2, y2, A[0], A[1], B[0], B[1]))
        collisions.push(this.computeStraitCollision(x1, y1, x2, y2, B[0], B[1], C[0], C[1]))
        collisions.push(this.computeStraitCollision(x1, y1, x2, y2, C[0], C[1], A[0], A[1]))

        return collisions
    }

    computeCords = el => {
        let [x2, y2] = this.collisionsArrayFormation(-1, el.yAxis, 0, el.yAxis).sort((a) => {
            return (Math.sqrt(Math.abs(a[0]) ** 2 + Math.abs(a[1]) ** 2) < this.state.prismRadius && a[0] < 0) ? -1 : 1
        })[0]

        let [x3, y3] = this.collisionsArrayFormation(x2, y2, 0, 0).sort((a, b) => {
            return (Math.sqrt(Math.abs(a[0]) ** 2 + Math.abs(a[1]) ** 2) < this.state.prismRadius && a[0] > 0) ? -1 : 1
        })[0]

        let [x4, y4] = [document.body.clientWidth / 2, y3]

        return { x2: x2, y2: y2, x3: x3, y3: y3, x4: x4, y4: y4 }
    }

    render() {
        let { prismDecartCoordinates, prismRadius } = this.state

        let beams = this.state.beams.map(el => <Beam
            coordinates={{ x1: -document.body.clientWidth / 2, y1: el.yAxis, ...this.computeCords(el) }}
            key={el.color}
            color={el.color}
        />)

        return (
            <InterferenceStage prism={{ coordinates: prismDecartCoordinates, radius: prismRadius }} beams={beams} />
        )
    }
}

export default InterferenceStageContainer