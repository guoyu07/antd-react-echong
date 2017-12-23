export function getRegister(_url, _params){
    return {
        types: ['regidterbeforeRequest', 'registerRequested', 'registerRequestError'],
        url: _url,
        method:'get',
        params: _params
    }
}