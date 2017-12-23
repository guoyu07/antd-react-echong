export function getLogin(_url, _params){
    return {
        types: ['loginRequested', 'loginbeforeRequest', 'loginrequestError'],
        url: _url,
        method:'get',
        params: _params
    }
}