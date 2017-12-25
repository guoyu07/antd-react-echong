export function getCart(_url, _params){
    return{
        types: ['cartRequested','cartbeforeRequest','cartrequestError'],
        url: _url,
        method:'get',
        params: _params
    }
}
export function getNum(){
    return{
        types: ['cartRequested','cartbeforeRequest','cartrequestError'],
        url: _url,
        method:'get',
        params: _params
    }
}