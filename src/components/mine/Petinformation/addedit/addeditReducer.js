export default function getAddedit(state = {}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'addedit':
            newState.status = 1;
            newState.response = action.response;
            break;
    }
    return newState;
}