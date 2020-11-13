import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div style={{ marginLeft: "2.5em", marginRight: "2.5em", marginTop: "2em" }}>
            <SurveyList />
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;