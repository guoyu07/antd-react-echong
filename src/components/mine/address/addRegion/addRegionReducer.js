export default function getAddregion(state = {}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'getAddregion':
            newState.status = 1;
            newState.response = action.response;
            break;
    }
    return newState;
} 