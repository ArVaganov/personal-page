import React from 'react'
import PageLabel from '../../components/PageLabel'

const AboutPage = () => {
    return (
        <main className="main">
            <div className="page_d">
                <div className="container">
                    <PageLabel eng="Biography"
                        ru="Биография"
                    />
                </div>
            </div>
            <div className="page__light">
                <div className="container">
                    <h3>Text sample. Bio.</h3>
                </div>
            </div>
        </main>
    )
}

export default AboutPage