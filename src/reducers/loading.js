import {HIDE_LOADING, SHOW_LOADING} from "../action/loading";

export default function loading(state= [], action){
    switch(action.type){
        case SHOW_LOADING:
            return state.concat([action.id]);

        case HIDE_LOADING:
            return state.filter(f => f !== action.id);

        default:
            return state;
    }
}