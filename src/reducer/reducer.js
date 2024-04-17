const initialState = {
    count : 0
}
const counterReducer  =(state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                ...state, count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count > 0 ? state.count -1 : 0
            }
        case 'ADD-TEN':
            return {
                ...state,
                count: state.count + 10
            }
            case 'CLEAR':
            return {
                ...state,
                count: 0
            }

        default:
            return state
    }
}

export default counterReducer
