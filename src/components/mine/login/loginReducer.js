export default function LoginReducer(state = {}, action){
    var loginState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case 'loginbeforeRequest':
            loginState.status = 0;
            break;
        case 'loginRequested':
            loginState.status = 1;
            loginState.response = action.response;
            break;
        case 'loginrequestError':
            loginState.status = -1;
            loginState.error = action.error
            break;
    }

    return loginState;
}