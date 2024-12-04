export const bodyValidation = (body) => {
    if(body && body.hasOwnProperty('title') && body.hasOwnProperty('description')){
        return true
    }else{
        false
    }
}