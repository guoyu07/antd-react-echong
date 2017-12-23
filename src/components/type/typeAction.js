export function getType(_url, _params){
    return {
        types: ['typeRequested'],
        url: _url,
        method:'get',
        params: _params,
    }
}                                