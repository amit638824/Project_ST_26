import { userModel } from "../model/model.js"
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