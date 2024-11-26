import { getRequestBody } from "./get-request-body.js"
import { setHeaders } from "./set-header-middleware.js"

export const middlewares = async (req, res) => {
    setHeaders(req, res)
    return await getRequestBody(req, res) 
}