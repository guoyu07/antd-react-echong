export function peteditAction(_url, _params) {
    return {
        types: ['peteditAction'],
        url: _url,
        method:'get',
        params: _params
    }
}
export function getInformation(_url, _params) {
    return {
        types: ['getInformation'],
        url: _url,
        method:'get',
        params: _params
    }
}