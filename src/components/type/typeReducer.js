export default function DataGridReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));

    switch(action.type){


        case 'typeRequested':
            newState.status = 1;
            newState.response = action.response;
            break;

    }
    //console.log(newState)
    return newState;
}