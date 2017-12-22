export function getData(_url, _params){
    return {
        types: ['home'],
        url: _url,
        method:'get',
        params: _params
    }
}