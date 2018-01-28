import React from 'react'
import PageLabel from '../../components/PageLabel'

const LogPage = () => {
    return (
        <main className="main">
            <div className="page_d">
                <div className="container">
                    <PageLabel eng="My weblog"
                        ru="Мои записи"
                    />
                </div>
            </div>
            <div className="page__light">
                <div className="container">
                    <h3>Text sample. Web Log.</h3>
                </div>
            </div>
        </main>
    )
}

export default LogPage