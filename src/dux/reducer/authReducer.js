import {LOGIN, SIGNOUT, SIGNUP} from "../actions/actions";

const intiaState = {
    userData: {
        name: null,
        email: null,
        password: null,
        gender: null,
        token: null,
        _id: null
    }
}
export default (state = intiaState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                userData: {
                    ...action.payload
                }
            };

        case SIGNUP:
            return {
                ...state,
                auth: true
            }
        case SIGNOUT:
            return {
                ...intiaState
            }
        default: return state;
    }
}

