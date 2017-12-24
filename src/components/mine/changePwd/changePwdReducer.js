export default function getChange(state = {}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'changeAction':
            newState.status = 1;
            newState.response = action.response;
            break;
    }
    return newState;
}