export function getData(_url, _params){
    return {
        types: ['home'],
        url: _url,
        params: _params,
        method:'get'
    }
}