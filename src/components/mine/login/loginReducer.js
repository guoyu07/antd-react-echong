export default function LoginReducer(state = {}, action){
    var loginState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case 'beforeRequest':
            loginState.status = 0;
            break;
        case 'Requested':
            loginState.status = 1;
            loginState.response = action.response;
            break;
        case 'requestError':
            loginState.status = -1;
            loginState.error = action.error
            break;
    }

    return loginState;
}