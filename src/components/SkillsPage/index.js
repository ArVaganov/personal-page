import React from 'react'
import PageLabelContainer from '../../containers/PageLabelContainer'
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
        title: 'Laravel',
        icon: 'Laravel',
        description: 'Awesome MVC PHP framework for building web-applications',
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
        title: 'Soft skills',
        icon: 'SoftSkills',
        description: 'Personal attributes, personality traits and communication abilities',
    },
]

const skillsJsx = skills.map(skill => <SkillBlock key={skill.icon} {...skill} />)

const SkillsPage = () => (
    <main className="main">
        <div className="page_d">
            <div className="container">
                <PageLabelContainer text={{
                    eng: "Skills & abilities",
                    rus: "Навыки и технологии",
                }}
                />
            </div>
        </div>
        <div className="page__light">
            <div className="container">
                <PageLabelContainer text={{
                        eng: "Here are technologies that I use in my work. Expand for details.",
                        rus: "В списке представленны технологии которые я повседневно использую в разработке. Кликните по элементу списка для подробностей.",
                    }}
                    size='md'
                />
                <div className="skills-container">
                    {skillsJsx}
                </div>
            </div>
        </div>
    </main>
)

export default SkillsPage