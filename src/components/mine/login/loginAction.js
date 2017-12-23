export function getLogin(_url, _params){
    return {
        types: ['loginbeforeRequest', 'loginRequested', 'loginrequestError'],
        url: _url,
        method:'get',
        params: _params
    }
}