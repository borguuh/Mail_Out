// SurveyFormReview shows users their form inputs for review
import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ formValues, onCancel, sendSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label}) => {
    return (
    <div key={name} style={{ marginBottom: "2em" }}>
        <label><h5>{label}</h5></label>
        <div >{formValues[name]}</div>
    </div >
    );
  });
  
    return (
    <div style={{ marginLeft: "2.5em", marginRight: "2.5em", marginTop: "2em" }}>
      <h5 style={{ marginBottom: "1em", fontWeight: "500" }}>Please confirm your entries</h5>
        {reviewFields}
        <br />
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
        Back
      </button>
      <button 
        onClick={()=>sendSurvey(formValues, history)}
        className="green btn-flat right  white-text">
          Send (1 credit)
          <i className="material-icons right">forward_to_inbox</i>
      </button>
    </div>
  );
};

function mapStateToProps(state){
    
    return {
        formValues : state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
