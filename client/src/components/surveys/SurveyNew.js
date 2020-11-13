// SurveyNew shows SurveyForm and SurveyFormReview
import React from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


class SurveyNew extends React.Component{
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview 
            onCancel={()=>this.setState({ showFormReview: false })}
            />;
        }

        return ( <SurveyForm 
            onSurveySubmit={() => this.setState({ showFormReview: true })} />
        );
    }

    render(){
        return (
            <div style={{ marginLeft: "2.5em", marginRight: "2.5em", marginTop: "2em" }}>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);