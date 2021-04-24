import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from 'app/auth/store/actions';
import { bindActionCreators } from 'redux';
import * as Actions from 'app/store/actions';
import * as authActions from 'app/auth/store/actions';
import jwtService from 'app/services/jwtService';
import { useDispatch, useSelector } from 'react-redux';

function Auth(props) {
    /*eslint-disable-next-line no-useless-constructor*/
    const dispatch = useDispatch();
    /**
     * Comment the line if you do not use JWt
     */

    /**
     * Comment the line if you do not use Auth0
     */
    //auth0Check();

    /**
     * Comment the line if you do not use Firebase
     */
    //firebaseCheck();

    const jwtCheck = () => {
        jwtService.on('onAutoLogin', () => {

            props.showMessage({ message: 'Logging in with JWT' });

            /**
             * Sign in and retrieve user data from Api
             */
            if (jwtService.signInWithToken()) {
                dispatch(authActions.submitautologin());
                props.showMessage({ message: 'Logged in with JWT' });
            }
            else {
                props.showMessage({ message: 'Credentials Invalid' });
            }
        });

        jwtService.on('onAutoLogout', (message) => {
            if (message) {
                props.showMessage({ message });
            }
            props.logout();
        });

        jwtService.init();
    };
    jwtCheck();
    const { children } = props;
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: userActions.logoutUser,
        setUserData: userActions.setUserData,
        showMessage: Actions.showMessage,
        hideMessage: Actions.hideMessage
    },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
