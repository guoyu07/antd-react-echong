export function changeAction(_url, _params) {
    return {
        types: ['changeAction','aa'],
        url: _url,
        method: 'get',
        params: _params
    }
}