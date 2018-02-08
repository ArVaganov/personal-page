import React, { Component } from 'react'
import LanguageSwitch from '../components/LanguageSwitch'
import { connect } from 'react-redux'
import { setLanguage } from '../actions'

const mapStateToProps = (state) => ({ language: state.language.name })

const mapDispatchToProps = (dispatch) => {
    return {
        onLanguageClick: (language) => {
            dispatch(setLanguage(language))
        }
    }
}

class LanguageSwitchContainer extends Component {
    constructor(props) {
        super(props)
        this.setLanguage = this.setLanguage.bind(this)
    }

    setLanguage(language) {
        this.props.onLanguageClick(language)
    }

    render() {
        return (
            <LanguageSwitch currentLanguage={this.props.language} setLanguage={this.setLanguage}/>
        )
    }
}

const ConnectedLanguageSwitchContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LanguageSwitchContainer)

export default ConnectedLanguageSwitchContainer