export function changeAction(_url, _params) {
    return {
        types: ['changeAction'],
        url: _url,
        method: 'get',
        params: _params
    }
}