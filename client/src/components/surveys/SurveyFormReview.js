// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';

// Whenever a survey is sent we need to navigate to dashboard.. 
// since action creator is creating survey through api call and only action creator knows the api call is successful or not
// we are using withRouter which makes action creator (submit survey) to navigate to dashboard once success
import { withRouter } from 'react-router-dom'; 

// generally we pass (this.props) since we are using connect.. but taking only required variables using ES6
// (this.props) has onCancel, formValues as variables so only taking them
// (this.props) => ({ onCancel, formValues })
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="yellow darken-3 btn-flat"
                onClick={onCancel}
            >
            Back
            </button>
            <button
                className="green btn-flat right white-text"
                // we are sending history object to the action creator (submitSurvey) which it uses to navigate to dashboard
                onClick={() => submitSurvey(formValues, history)}
            >
            Send Survey
            <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return {
        formValues: state.form.surveyForm.values
    };
}

// withRouter has access to the history object which we send to the present component as props
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));