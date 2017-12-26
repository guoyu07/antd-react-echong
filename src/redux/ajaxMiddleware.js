import http from '../utils/httpClient'

export function ajaxMiddleware(api){

    return function(dispatch){
        return function(action){
            const {types, url, method, params = {}} = action
            
            if(!url){
                return dispatch(action)
            }

            const [a,b,c]=types;
            
            api.dispatch({
                type: b
            })
            if(url){
                http[method](url, params).then(res => {
                    api.dispatch({
                        type: a,
                        response:res
                    })
                    console.log(res)
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