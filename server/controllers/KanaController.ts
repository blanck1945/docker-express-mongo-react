import {Request, Response} from "express"

export default {
    async index(req:Request,res:Response) {
        try {
            res.json({
                msg: "Kana Controller Verbose"
            })
        }
        catch(err) {
            console.error(err)
        }
    }
}