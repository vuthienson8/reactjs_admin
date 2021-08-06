import {combineReducers} from 'redux';

import loginReducer from "./loginReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({
    auth: loginReducer,
    users: userReducer
})

export default reducers;