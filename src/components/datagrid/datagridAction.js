export function getData(_url, _params){
    return {
        types: ['Requested'],
        url: _url,
        method:'get',
        params: _params
    }
}