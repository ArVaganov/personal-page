import React from 'react'
import PageLabel from '../../components/PageLabel'
import SkillBlock from '../SkillBlock'
import './SkillsPage.css'

const skills = [
    {
        title: 'Git Workflow',
        icon: 'GIT',
        description: 'About Git',
    },
    {
        title: 'JavaScript',
        icon: 'Javascript',
        description: 'Popular Programming Language',
    },
    {
        title: 'HTML',
        icon: 'HTML',
        description: 'HyperText Markup Language 5\'th revision',
    },
    {
        title: 'CSS',
        icon: 'CSS',
        description: 'Cascading Style Sheets',
    }
]

const skillsJsx = skills.map(skill => <SkillBlock {...skill} />)

const SkillsPage = () => (
    <main className="main">
        <div className="page_d">
            <div className="container">
                <PageLabel eng="Skills & abilities"
                    ru="Навыки и способности"
                />
            </div>
        </div>
        <div className="page__light">
            <div className="container">
                <h3>Text sample</h3>
                {skillsJsx}
            </div>
        </div>
    </main>
)

export default SkillsPage