export function getHomeSearch(_url, _params){
    return {
        types: ['getHomeSearch','gg'],
        url: _url,
        params: _params,
        method:'get'
    }
}