import React from 'react'
import InterferenceStageContainer from '../../containers/InterferenceStageContainer'
import PageLabel from '../../components/PageLabel'
import './SkillsPage.css'

const SkillsPage = () => (
    <main>
        <div className="page_d">
            <InterferenceStageContainer />
            <div className="container">
                <PageLabel eng="Skills and abilities"
                    ru="Навыки и способности"
                />
            </div>
        </div>
        <div className="page__light">
            <div className="container">
                Какой-то текст
            </div>
        </div>
    </main>
)

export default SkillsPage