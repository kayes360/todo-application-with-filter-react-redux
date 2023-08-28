import {FILTER_BY_STATUS, FILTER_BY_COLOR} from 'src/redux/filters/actionTypes';

export const filter_by_status = (status)=>{
    return {
        type: FILTER_BY_STATUS,
        payload: status
    }
}
export const filter_by_color = (color, changeType)=>{
    return {
        type: FILTER_BY_COLOR,
        payload: {
            color,
            changeType
        }

    }
}