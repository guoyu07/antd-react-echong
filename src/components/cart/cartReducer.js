export default function CartReducer(state = {}, action){
    var newCart = JSON.parse(JSON.stringify(state));
    
    switch(action.type){
        case 'cartbeforeRequest':
            newCart.status = 0;
            break;
        case 'cartRequested':
            newCart.status = 1;
            newCart.response = action.response;
            break;
        case 'cartrequestError':
            newCart.status = -1;
            newCart.error = action.error
            break;
    }

    return newCart;
}