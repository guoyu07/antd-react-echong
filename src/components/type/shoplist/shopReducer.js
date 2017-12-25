export default function shopReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));

    switch(action.type){

        case 'shopsome':
            newState.status = 0;
            break;
        case 'shop':
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