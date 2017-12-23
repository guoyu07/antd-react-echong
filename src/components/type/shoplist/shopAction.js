export function getData(_url, _params){
    return {
        types: ['Request'],
        url: _url,
        method:'get',
        params: _params,
    }
}                                