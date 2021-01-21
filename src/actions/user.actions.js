import axios from 'axios';
import {ADD_USER, GET_USER, GET_ALL_USER_FROM_ROOM, ALL_USER, ONE_ROOM_USERS, REMOVE_RESERVED, RESERVED_FAIL, ONE_ROOM_FAIL, CHANGE_PAID, ROOM_FORM_FAIL} from '../constants/user.constants';

// const API = "http://localhost:4001"
const API = 'https://backend-post.herokuapp.com'

export const addUser = (name, lastName, email, phone, setData, idRoom, price, capacity, night, startDate, code) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({name, lastName, email, phone, setData, idRoom, price, capacity, night, startDate, code});

      const response = await axios.post(`${API}/api/hotel/user/add`, body, config)
      
      dispatch({
          type: ADD_USER,
          payload: response.data
      })
    } catch (error) {
        dispatch({
            type: RESERVED_FAIL,
        })
    }
}
export const showUser = (email) => async (dispatch) => {
    try {
        const response = await axios.get(`${API}/api/hotel/user/user/${email}`)
        dispatch({
            type: GET_USER,
            payload: response.data
        })
      } catch (error) {
          dispatch({
              type: ROOM_FORM_FAIL,
          })
      }
  }


export const showAllUserFromRoom = (id_room) => async(dispatch) => {
    try {
        const response = await axios.get(`${API}/api/hotel/user/room/${id_room}`)
        dispatch({
            type: GET_ALL_USER_FROM_ROOM,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ROOM_FORM_FAIL,
        })
    }
}
export const allUser = () => async(dispatch) => {
    try {
        const response = await axios.get(`${API}/api/hotel/user/all_room`)
        dispatch({
            type: ALL_USER,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ROOM_FORM_FAIL,
        })
    }
}
export const OneRoomUsers = (id_room) => async(dispatch) => {
    try {
        const response = await axios.get(`${API}/api/hotel/user/show_one_room/${id_room}`)
        dispatch({
            type: ONE_ROOM_USERS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ROOM_FORM_FAIL,
        })
    }
}
export const RemoveReservedUser = (id, idRoom) => async(dispatch) => {
    try {
        const response = await axios.delete(`${API}/api/hotel/user/remove_reserved_user/${id}`)
        dispatch({
            type: REMOVE_RESERVED,
            payload: response.data
        })
        dispatch(OneRoomUsers(idRoom))
    } catch (error) {
        dispatch({
            type: ROOM_FORM_FAIL,
        })
    }
}

export const ChangePaid = (id, idRoom) => async(dispatch) => {
    try {
        console.log(id, idRoom)
        const response = await axios.put(`${API}/api/hotel/user/paid/${id}`)
        dispatch({
            type: CHANGE_PAID,
            payload: response.data
        })
        dispatch(OneRoomUsers(idRoom))
    } catch (error) {
        dispatch({
            type: ROOM_FORM_FAIL,
        })
    }
}
export const ChangeUnpaid = (id, idRoom) => async(dispatch) => {
    try {
        console.log(id, idRoom)
        const response = await axios.put(`${API}/api/hotel/user/no_paid/${id}`)
        dispatch({
            type: CHANGE_PAID,
            payload: response.data
        })
        dispatch(OneRoomUsers(idRoom))
    } catch (error) {
        dispatch({
            type: ROOM_FORM_FAIL,
        })
    }
}
