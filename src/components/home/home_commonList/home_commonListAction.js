export function getData(_url, _params){
    console.log(_url)
    return {
        types: ['Requested'],
        url: _url,
        params: _params
    }
}