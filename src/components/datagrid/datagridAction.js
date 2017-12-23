export function getData(_url, _params){
    return {
        types: ['datagrid'],
        url: _url,
        method:'get',
        params: _params
    }
}