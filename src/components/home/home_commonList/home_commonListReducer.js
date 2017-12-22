export default function home_commonListReducer(state = {}, action){
    var homeState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'Requested':
            homeState.status = 1;
            homeState.response = action.response;
            break;
    }

    return homeState;
}