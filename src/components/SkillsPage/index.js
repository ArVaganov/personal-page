import React from 'react'
import PageLabel from '../../components/PageLabel'
import SkillBlock from '../SkillBlock'
import './SkillsPage.css'

const skills = [
    {
        title: 'HTML',
        icon: 'HTML',
        description: 'HyperText Markup Language',
    },
    {
        title: 'CSS',
        icon: 'CSS',
        description: 'Cascading Style Sheets',
    },
    {
        title: 'JavaScript',
        icon: 'Javascript',
        description: 'Programming Language',
    },
    {
        title: 'React',
        icon: 'React',
        description: 'A JavaScript library for building user interfaces',
    },
    {
        title: 'Redux',
        icon: 'Redux',
        description: 'Redux is a predictable state container for JavaScript apps',
    },
    {
        title: 'Git Workflow',
        icon: 'GIT',
        description: 'Version control system',
    },
    {
        title: 'GraphQL',
        icon: 'GraphQL',
        description: 'A query language',
    },
    {
        title: 'SQL',
        icon: 'SQL',
        description: 'Structured query language',
    },
    {
        title: 'VueJs',
        icon: 'Vue',
        description: 'A progressive JavaScript Framework',
    },
    {
        title: 'Webpack',
        icon: 'Webpack',
        description: 'A module bundler',
    },
    {
        title: 'Python.',
        icon: 'Python',
        description: 'Programming Language',
    },
    {
        title: 'Soft skills',
        icon: 'SoftSkills',
        description: 'Personal attributes, personality traits, inherent social cues, and communication abilities',
    },
]

const skillsJsx = skills.map(skill => <SkillBlock key={skill.icon} {...skill} />)

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