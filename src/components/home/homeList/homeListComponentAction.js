export function getHomeList(_url, _params){
    return {
        types: ['getHomeList','aa'],
        url: _url,
        method:'get',
        params: _params
        
    }
}
export function homeCar(_url, _params){
    return {
        types: ['homeCar','bb'],
        url: _url,
        method:'post',
        params: _params
        
    }
}