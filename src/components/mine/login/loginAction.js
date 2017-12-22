export function getLogin(_url, _params){
    return {
        types: ['login', 'Requested', 'requestError'],
        url: _url,
        method:'get',
        params: _params
    }
}