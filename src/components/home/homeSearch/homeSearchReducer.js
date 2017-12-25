export default function homeSearchReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'getHomeSearch':
            newState.status = 1;
            newState.response = action.response;
            break;
    }
    return newState;
}