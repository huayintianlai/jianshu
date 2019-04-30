import  * as constants from './contants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const changeFocusedAction = (data) => ({
    type: constants.CHANGE_FOCUSED,
    data
})

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});

export const getList = () => {
    return (dispatch)=>{
        axios.get('api/headerList.json').then((res)=>{
            const data=res.data;
            dispatch(changeList(data.data));
        }).catch((e)=>{
            console.log(e);
        })
    }
}