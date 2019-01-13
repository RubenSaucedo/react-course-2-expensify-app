import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
        <h1>Info</h1>
        <p>This is the info: {props.info} </p>
    </div>
    ); 
}

// HOC 
// Reuse code
// Render hijacking
// Prop manipulation
// Abstarct state

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is secret please don't share</p> }
            <WrappedComponent { ...props } />
        </div>
    );
}

// require Authentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent { ...props }/> : <p>You need Authentication</p> }            
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='Secret'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='Secret'/>, document.getElementById('app'));