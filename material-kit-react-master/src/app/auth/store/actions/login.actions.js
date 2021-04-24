
import jwtService from 'app/services/jwtService';
import { setUserData } from './user.actions';
import * as Actions from 'app/store/actions';
import history from '@history';
import store from 'app/store';
import { useSelector, useDispatch } from 'react-redux';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin({ email, password }) {
    return (dispatch) => {
        Actions.showMessage({ message: 'Logging in' });
        jwtService.signInWithEmailAndPassword(email, password).
            then((user) => {
                console.log(user);
                dispatch(setUserData(user));
            })
            .then(() => {
                    Actions.showMessage({ message: 'Logged in' });
                    history.push('/academy/');
                    return dispatch({
                        type: LOGIN_SUCCESS
                    });
                });
    }
}

export function submitautologin() {
    return (dispatch) => {
        jwtService.axiosInstance.get('/basic-user-info/').then(
            (user) => {
                console.log(user.data);
                dispatch(setUserData(user.data));
                Actions.showMessage({ message: 'Logged in' });
                if (user)
                    return dispatch({
                        type: LOGIN_SUCCESS
                    });
                else
                    return dispatch({
                        type: LOGIN_ERROR,
                        payload: user.error
                    });
            }
        );
    }
}

