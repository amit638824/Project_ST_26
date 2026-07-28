import { userModel, projectModel, masterPlanModel } from "../model/model.js"

export const getmasterplan = async (req, res) => {
    try {
        const result = await masterPlanModel.find().sort({ createdAt: -1 })
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
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
export const createmasterplan = async (req, res) => {

    try {
        const { name, price, credits, tagline, features, popular } = req.body;
        const isExists = await masterPlanModel.findOne({ name, price })
        if (isExists) {
            res.json({
                code: 400,
                success: false,
                message: "Plan already exists",
                result: "",
                error: true
            })
        } else {
            const data = new masterPlanModel({ name, price, credits, tagline, features, popular })
            const result = await data.save();
            res.json({
                code: 200,
                success: true,
                message: "Plan created  successfully",
                result: result,
                error: false
            })
        }
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
export const adminUserList = async (req, res) => {
    try {
        const result = await userModel.find({ type: "user" });
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
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

export const adminClientList = async (req, res) => {
    try {
        const result = await userModel.find({ type: "client" });
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
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

export const adminProjectList = async (req, res) => {
    try {
        const result = await projectModel.find();
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
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
