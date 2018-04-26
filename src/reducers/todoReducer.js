export default function todoReducer(state=[], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, Object.assign({}, action.todoItem)];
        default:
            return state;
    }
}