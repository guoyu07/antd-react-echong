export function getOrder(_url, _params) {
    return {
        types: ['orderlist', 'aa'],
        url: _url,
        method: 'get',
        params: _params

    }
}