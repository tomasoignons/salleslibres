import { GET_DOCUMENTS } from "../actions/document.actions";

const initialState = {}

export default function documentReducer(state = initialState, action) {
    switch (action.type){
        case GET_DOCUMENTS:
            return action.payload;
        default:
            return state
    }
}