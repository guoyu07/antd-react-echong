export function getRegister(_url, _params){
    return {
        types: ['register', 'Requested', 'requestError'],
        url: _url,
        method:'get',
        params: _params
    }
}