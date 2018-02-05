import React from 'react'
import * as icons from './icons'
import './SkillBlock.css'

const SkillBlock = ({ title, icon, description }) => {
    return (
        <div className="skill">
            <div className="skill__icon-container">
                <img className="skill__icon" src={icons[icon]} alt="skill"/>
            </div>
            <div className="skill__text-container">
                <div className="skill__title">{title}</div>
                <div className="skill__description">{description}</div>
            </div>
        </div>
    )
}

export default SkillBlock