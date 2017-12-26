export default function PaymentReducer(state = {}, action){
    var newPayment = JSON.parse(JSON.stringify(state));
    
    switch(action.type){
        case 'PaymentbeforeRequest':
            newPayment.status = 0;
            break;
        case 'PaymentRequested':
            newPayment.status = 1;
            newPayment.response = action.response;
            break;
        case 'PaymentrequestError':
            newPayment.status = -1;
            newPayment.error = action.error
            break;
    }
    return newPayment;
}