import * as type from "../const/ActionTypes";

const initialState = {
    list: {
        users: [],
        loading: false
    },
    addUser: {},
    getUser:{}
};
export default function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case type.FETCH_USERS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    users: action.payload.users,
                    total: action.payload.total
                }
            };
        case type.FETCH_USERS_FAILED:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    users: [],
                }
            };
    }
    return state;
}