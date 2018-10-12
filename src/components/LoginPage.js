import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <div>
        <button onClick={startLoginGoogle}> Login Google</button>
        <button onClick={startLoginFacebook}> Login Facebook</button>
    </div>    
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);