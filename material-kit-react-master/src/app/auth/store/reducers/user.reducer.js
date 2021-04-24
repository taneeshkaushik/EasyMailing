import * as Actions from '../actions';

const initialState = {
    role: [],
    data: {
        'username': '',
        'firstName': '',
        'lastName':'',
        'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
        'email'      : '',
        'isStaff':false,
        'info': {}
    }
};

const user = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_USER_DATA:
        {
            return {
                ...initialState,
                ...action.payload
            };
        }
        case Actions.REMOVE_USER_DATA:
        {
            return {
                ...initialState
            };
        }
        case Actions.USER_LOGGED_OUT:
        {
            return initialState;
        }
        default:
        {
            return state
        }
    }
};

export default user;
