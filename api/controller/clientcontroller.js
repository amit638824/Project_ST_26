import { projectModel } from "../model/model.js"
export const postProject = async (req, res) => {
    try {
        const { clientId, title, desc, budget, duration } = req.body
        const isExists = await projectModel.findOne({ clientId, title });
        if (isExists) {
            res.json({
                code: 400,
                success: false,
                message: "Project already exists",
                result: "",
                error: true
            })
        } else {
            const data = new projectModel({ clientId, title, desc, budget, duration })
            const result = await data.save();
            res.json({
                code: 200,
                success: true,
                message: "Project  posted successfully",
                result: result,
                error: false
            })

        }
    } catch (err) {
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}

export const clientProjectList = async (req, res) => {
    try {
        const { clientId } = req.query;
        const result = await projectModel.find({ clientId })
        res.json({
            code: 200,
            success: true,
            message: "data fetched",
            result: result,
            error: false
        })
    } catch (err) {
        console.log(err);
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}