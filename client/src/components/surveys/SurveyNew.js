// SurveyNew shows SurveyForm and SurveyFormReview
// class based component
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    // component level state btw survey new, survey form, survey form review
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return (
            <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })}/>
            );
        }
        // callback function is passed to the survey form and survey form review so that component level state can be changed in both components.
        return (
            <SurveyForm 
                onSurveySubmit={() => this.setState({ showFormReview: true })} 
            />
        );
    }


    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
}) (SurveyNew);