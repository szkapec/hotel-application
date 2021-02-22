import axios from 'axios';
import {ROOM_IS_LOADED, ONE_ROOM, RESERVED_ROOM, EMAIL_SEND, RESERVED_FAIL, ONE_ROOM_FAIL, ROOM_FORM_FAIL } from '../constants/room.constants'
import { Dispatch } from 'redux';

type RoomType = {
    type: string;
}

const API = 'http://192.168.100.115:4000'
// const API = 'https://backend-post.herokuapp.com'

export const AllRoom = () => async (dispatch: Dispatch) => {

    try {
        const response = await axios.get<XMLHttpRequest>(`${API}/api/hotel/room/room`)
        dispatch({
            type: ROOM_IS_LOADED,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ROOM_FORM_FAIL,
        })
    }
}

export const oneRoom = (room_id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${API}/api/hotel/room/room/${room_id}`)
        dispatch({
            type: ONE_ROOM,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ONE_ROOM_FAIL,
        })
    }
}

export const reserveRoom = (name: string, lastName: string, email: string, phone: number, setData: any , room_id: string) => async (dispatch: Dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({ name, lastName, email, phone, setData });
        const response = await axios.put(`${API}/api/hotel/room/reserved/${room_id}`, body, config)

        dispatch({
            type: RESERVED_ROOM,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: RESERVED_FAIL,
        })
    }
}

export const sendEmail = (email: string, code: number, data: any) => async (dispatch: Dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({ email, code, data });
        const response = await axios.post(`${API}/api/hotel/room/send`, body, config)
        dispatch({
            type: EMAIL_SEND,
            payload: response.data
        })
    } catch (error) {
        console.log('error', error)
    }
}