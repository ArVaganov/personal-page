import React from 'react'
import InterferenceStageContainer from '../../containers/InterferenceStageContainer'
import PageLabel from '../../components/PageLabel'
import './SkillsPage.css'

const SkillsPage = () => (
    <div className="page_d">
        <InterferenceStageContainer />
        <div className="container">
            <PageLabel eng="Skills and abilities"
                ru="Навыки и способности"
            />
        </div>
    </div>
)

export default SkillsPage