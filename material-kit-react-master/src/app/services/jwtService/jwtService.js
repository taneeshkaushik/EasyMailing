import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';
import history from '@history';
import * as Actions from 'app/store/actions';
import { useDispatch } from 'react-redux';

class jwtService extends FuseUtils.EventEmitter {
    baseURL = 'http://127.0.0.1:8000/api/';
    axiosInstance = axios.create({

        baseURL: this.baseURL,
        timeout: 5000,
        headers: {
            Authorization: window.localStorage.getItem('access_token') ?
                'Bearer ' + window.localStorage.getItem('access_token') :
                null,
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
    });
    init() {
        this.setInterceptors(this.baseURL);
        this.handleAuthentication();
    }

    setInterceptors = (baseURL) => {
        this.axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            async function (error) {
                if (error == undefined) {
                    alert('error undefined');
                    return Promise.reject(error);
                }
                const originalRequest = error.config;

                if (typeof error.response === 'undefined') {
                    alert(
                        'A server/network error occurred. ' +
                        'Looks like CORS might be the problem. ' +
                        'Sorry about this - we will get it fixed shortly.'
                    );
                    return Promise.reject(error);
                }

                if (
                    error.response.status === 401 &&
                    originalRequest.url === baseURL + 'token/refresh/') {
                    window.location.href = '/login/';
                    return Promise.reject(error);
                }

                if (
                    error.response.data.code === 'token_not_valid' &&
                    error.response.status === 401 &&
                    error.response.statusText === 'Unauthorized'
                ) {
                    const refreshToken = window.localStorage.getItem('refresh_token');

                    if (refreshToken) {
                        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                        // exp date in token is expressed in seconds, while now() returns milliseconds:
                        const now = Math.ceil(Date.now() / 1000);
                        console.log(tokenParts.exp);

                        if (tokenParts.exp > now) {
                            return this.axiosInstance
                                .post('/token/refresh/', {
                                    refresh: refreshToken
                                })
                                .then((response) => {
                                    window.localStorage.setItem('access_token', response.data.access);
                                    window.localStorage.setItem('refresh_token', response.data.refresh);

                                    this.axiosInstance.defaults.headers['Authorization'] =
                                        'Bearer ' + response.data.access;
                                    originalRequest.headers['Authorization'] =
                                        'Bearer ' + response.data.access;
                                    return this.axiosInstance(originalRequest);
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }
                        else {
                            console.log('Refresh token is expired', tokenParts.exp, now);
                            window.location.href = '/login/';
                        }
                    }
                    else {
                        console.log('Refresh token not available.');
                        window.location.href = '/login/';
                    }
                }

                // specific error handling done elsewhere
                return Promise.reject(error);
            }
        );
    };

    handleAuthentication = () => {

        let access = this.getAccessToken();
        let refresh = this.getRefreshToken();
        if (!access) {
            return;
        }
        if (!refresh) {
            return;
        }
        if (this.isAuthTokenValid()) {
            this.setSession(access, refresh);
            this.emit('onAutoLogin', true);
        } else {
            this.setSession(null, null);
            this.emit('onAutoLogout', 'access expired');
        }
    };

    createUser = (data) => {
        Actions.showMessage({
            message: "Registering"
        });
        return new Promise((resolve, reject) => {
            this.axiosInstance.post('/create/', data)
                .then(response => {
                    if (response.data.id) {

                        history.push('/example')
                        Actions.showMessage({
                            message: "Registration Successfull"
                        });

                        resolve(response.data.id);
                    } else {
                        reject(response.data.error);
                    }
                });
        });
    };


    signInWithEmailAndPassword = async (_username, _password) => {
        console.log(_username);
        const data =
            this.axiosInstance.post('/token/', {
                username: _username,
                password: _password
            }).then(async response => {
                // console.log(response.data.access);
                if (response.data.access) {
                    this.setSession(response.data.access, response.data.refresh);
                    // resolve(response.data.access);
                    return ;
                }
            }).then(async temp => {
                const response = await this.axiosInstance.get('/basic-user-info/', {
                    headers: {
                        Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
                        'Content-Type': 'application/json',
                        accept: 'application/json',
                    }
                });
                console.log(await response.data);
                return await response.data;
            });
        return await data;
    };

    signInWithToken = () => {
        if (this.isAuthTokenValid()) {
            return true;
        } else {
            return false;
        }
    };

    updateUserData = (user) => {
        return this.axiosInstance.post('/api/auth/user/update', {
            user: user
        });
    };

    setSession = (access, refresh) => {
        if (access != undefined) {
            // console.log('hello');
            window.localStorage.setItem('access_token', access);
            window.localStorage.setItem('refresh_token', refresh);
            this.axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + access;
        }
    };

    logout_new = () => {
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('refresh_token');
    };

    isAuthTokenValid = () => {
        let access = this.getAccessToken();
        if (!access) {
            return false;
        }
        const promise = this.axiosInstance.post('/token/verify/', {
            token: access
        });
        // using .then, create a new promise which extracts the data
        const dataPromise = promise.then((response) => response.data);
        // return it
        if (dataPromise.code == undefined) {
            return true;
        } else {
            return false;
        }
    };

    getAccessToken = () => {
        return window.localStorage.getItem('access_token');
    };
    getRefreshToken = () => {
        return window.localStorage.getItem('refresh_token');
    };
}

const instance = new jwtService();

export default instance;