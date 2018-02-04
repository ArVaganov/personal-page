import React from 'react'
import LanguageSwitch from '../components/LanguageSwitch'
import { connect } from 'react-redux'

const getCurrentLanguage = (language) => {
    if (language === 'eng') {
        return 'eng'
    } else if (language === 'ru') {
        return 'ru'
    }
}

const mapStateToProps = (state) => {
    return {
        language: getCurrentLanguage(state.language)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLanguageClick: (language) => {
            dispatch(setLanguage(language))
        }
    }
}

const LanguageSwitchContainer = () => {
    return (
        <LanguageSwitch language="ru"/>
    )
}

const ConnectedLanguageSwitchContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LanguageSwitchContainer)

export default ConnectedLanguageSwitchContainer