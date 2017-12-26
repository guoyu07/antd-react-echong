export default function orderReducer(state = {}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'orderlist':
            newState.status = 1;
            newState.response = action.response;
            break;
    }
    return newState;
}