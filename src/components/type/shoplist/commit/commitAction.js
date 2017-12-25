export function get(_url, _params){
    return {
        types: ['commit','commitsome'],
        url:_url,
        method:'post',
        params: _params

    }
} 