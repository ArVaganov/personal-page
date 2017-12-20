import React from 'react'
import Video from '../../components/Video'
import PageLabel from '../../components/PageLabel'
import './PortfolioPage.css'

const PortfolioPage = () => {
    return (
        <div className="page_d">
            <Video />
            <div className="container">
                <PageLabel eng="My works and experience"
                    ru="Мои работы"
                />
            </div>
        </div>
    )
}

export default PortfolioPage