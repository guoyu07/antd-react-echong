export function getPayment(_url, _params){
    return{
        types: ['paymentRequested','paymentbeforeRequest','paymentrequestError'],
        url: _url,
        method:'get',
        params: _params
    }
}
