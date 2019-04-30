import * as constants from './contants';
import { fromJS } from 'immutable'

const defaultValue = fromJS({
    focused: false,
    MouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultValue, action) => {
    switch (action.type) {
        case constants.CHANGE_FOCUSED:
            return state.set('focused', action.data);
        case constants.CHANGE_LIST:
            return state.merge({
                totalPage: action.totalPage,
                list: action.data
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}