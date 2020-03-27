import { combineReducers } from 'redux';
let data = (data = [{
    id: 0,
    title: '1111',
    singer: 'ssss',
    selected: false,
    like: false
}, {
    id: 1,
    title: '2222',
    singer: 'ssss',
    selected: false,
    like: false
}

], action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD':
            return [...data, {
                id: Date.now(),
                title: action.title,
                singer: action.singer,
                selected: false,
                like: false
            }]
        case 'REMOVE':
            return data.filter((item) => (item.id !== action.id));
        case 'CHECK_ALL':
            return data.map((item) => {
                item.selected = action.check;
                return Object.assign({}, item);
            });
        case 'CHECK':
            return data.map((item) => {
                if (item.id === action.id) {
                    item.selected = action.check;
                    return Object.assign({}, item);
                }
                return item;
            });
        case 'CHECK_LIKE':
            return data.map((item) => {
                if (item.id === action.id) {
                    item.like = action.check;
                    return Object.assign({}, item);
                }
                return item;
            });
        case 'REMOVE_SELECT':
            return data.filter((item) => !item.selected);
        case 'LIKE_SELECTED':
            return data.map((item) => {
                if (item.selected) {
                    item.like = true;
                    return Object.assign({}, item);
                }
                return item;
            })
        case 'CANCEL_LIKESELECTED':
            return data.map((item) => {
                if (item.selected) {
                    item.like = false;
                    return Object.assign({}, item);
                }
                return item;
            })


        default:
            break;
    }
    return data;
}

let reducer = combineReducers({
    data
});

export default reducer;