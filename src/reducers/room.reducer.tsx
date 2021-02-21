import {ROOM_IS_LOADED, ONE_ROOM, RESERVED_ROOM, EMAIL_SEND, RESERVED_FAIL, ONE_ROOM_FAIL, ROOM_FORM_FAIL } from '../constants/room.constants'

const initialState = {
   posts: {},
   allRoom: null,
   oneRoom: null,
   isLoading: false,
   errors: {},
};

const posts = (state = initialState, action) => {
   const { type, payload } = action;
   switch(type) {
       case ROOM_IS_LOADED:
           return {
               ...state,
               allRoom: payload,
               isLoading: false,
               errors: {},
           }
       case ONE_ROOM: 
           return {
               ...state,
               oneRoom: payload,
               isLoading: false,
               errors: {},
           }
        case RESERVED_ROOM:
            return {
                ...state,
                oneRoom: payload,
            }
        case EMAIL_SEND: 
            return {
                ...state,
            }
        case RESERVED_FAIL:
        case ONE_ROOM_FAIL:
        case ROOM_FORM_FAIL: {
            return {
                ...state
            }
        }
       default: 
           return state;
   }
}



export default posts; 