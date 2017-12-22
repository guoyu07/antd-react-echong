export default function RegisterReducer(state = {}, action){
    var registerState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequest':
            registerState.status = 0;
            break;
        case 'Requested':
            registerState.status = 1;
            registerState.response = action.response;
            break;
        case 'requestError':
            registerState.status = -1;
            registerState.error = action.error
            break;
    }

    return registerState;
}