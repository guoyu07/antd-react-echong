import http from '../utils/httpClient'

export function ajaxMiddleware(api){
    return function(dispatch){
        return function(action){
            
            const {types, url, method='get', params = {}} = action
            if(!url){
                return dispatch(action)
            }
            const [a,b,c]=types;
            
            api.dispatch({
                type: a
            })
            if(url){
                http.get(url, params).then(res => {
                    api.dispatch({
                        type: b,
                        response: res
                    })
                }).catch(error => {
                    api.dispatch({
                        type: c,
                        error
                    })
                })
            }
        }
    }
}