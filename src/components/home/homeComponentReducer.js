export default function homeReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'home':
            newState.status = 1;
            newState.response = action.response;
            break;
    }
    return newState;
}