import React from 'react'
import PageLabel from '../../components/PageLabel'
import './SkillsPage.css'

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
            </div>
        </div>
    </main>
)

export default SkillsPage