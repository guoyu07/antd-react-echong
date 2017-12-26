export function getData(_url, _params){
    return {
        types: ['shop','shopsome','requestError'],
        url:_url,
        method:'post',
        params: _params

    }
}