import { projectModel } from "../model/model.js"

export const userProjectList = async (req, res) => {
    try {
        const result = await projectModel.find().sort({ createdAt: -1 })
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
    } catch (err) {
        console.log(err)
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}
