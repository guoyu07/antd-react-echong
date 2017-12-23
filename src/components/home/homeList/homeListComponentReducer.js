export default function homeListReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'getHomeList':
            newState.status = 1;
            newState.response = action.response;
            break;
    }
    return newState;
}