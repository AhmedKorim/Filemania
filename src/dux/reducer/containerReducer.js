import {SIDE_OPEN} from "../actions/actions";

const intialState = {
    open: true
}
const sideBarReducer = (state = intialState, action) => {
    console.log(state);
    return action.type === SIDE_OPEN ? {...state , open: !state.open} : {...state};
}
export default sideBarReducer;

