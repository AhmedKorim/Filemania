import {LOGIN, SIGNOUT, SIGNUP} from "../actions/actions";

const intiaState = {
    auth: false,
    userData: {
        name: '',
        email: '',
        password: '',
        gender: '',

    }
}
const authReducer = (state = intiaState, action) => {
    switch (action.type) {
        case LOGIN:
            const {name, email, password, gender} = action.payload;
            return {
                auth: true,
                userData: {
                    name, email, password, gender
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

    }
}
export default authReducer;

