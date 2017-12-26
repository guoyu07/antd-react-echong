export default function commitReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));

    switch(action.type){

        case 'commitsome' :
            newState.status = 0;
            break;
        case 'commit'  :
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }
    return newState;
}