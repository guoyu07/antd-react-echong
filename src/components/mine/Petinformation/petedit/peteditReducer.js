export default function getPetedit(state = {}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'peteditAction':
            newState.status = 1;
            newState.response = action.response;
            break;
    }
    return newState;
}.                      