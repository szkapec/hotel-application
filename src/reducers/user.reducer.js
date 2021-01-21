import {ADD_USER, GET_USER, GET_ALL_USER_FROM_ROOM, ALL_USER, ONE_ROOM_USERS, REMOVE_RESERVED, RESERVED_FAIL, ONE_ROOM_FAIL, ROOM_FORM_FAIL, CHANGE_PAID} from '../constants/user.constants';

const initialState = {
    user: {},
    idRoom: [],
    oneRoom: null,
    isLoading: false,
    allUserFromRoom: [],
    allUsers: [],
    errors: {},
    oneRoomUsers: [],
    isloadingAllUsers: false,
};

const user = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                isLoading: false,
                errors: {},
            }
        case GET_USER: {
            return {
                ...state,
                idRoom: payload,
                oneRoom: payload,
                isLoading: false,
                co: false,
                errors: {},
            }
        }
        case GET_ALL_USER_FROM_ROOM: {
            return {
                ...state,
                allUserFromRoom: payload,
            }
        }
        case ALL_USER: {
            return {
                ...state,
                allUsers: payload,
                isloadingAllUsers: true,
            }
        }
        case ONE_ROOM_USERS: {
            return {
                ...state,
                oneRoomUsers: payload,
            }
        }
        case "CHANGE_PAID":
        case REMOVE_RESERVED: {
            return {
                ...state,
            }
        }
        case RESERVED_FAIL:
        case ONE_ROOM_FAIL:
        case ROOM_FORM_FAIL: {
            return {
                ...state,
                errors: { err: "ERROR" },
            }
        }
        default:
            return state;
    }
}



export default user; 