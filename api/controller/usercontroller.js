import { masterPlanModel, projectModel, subscriptionModel, userModel } from "../model/model.js"

export const userPurchasePlan = async (req, res) => {
    try {
        const { planId, userId } = req.body;
        const plan = await masterPlanModel.findOne({ _id: planId });
        const user = await userModel.findOne({ _id: userId })
        const puranaCredit = user?.credit ? user?.credit : 0;
        const planCredit = plan?.credits;
        const finalCredit = parseInt(puranaCredit) + parseInt(planCredit)
        await userModel.updateOne({ _id: userId }, { $set: { credit: finalCredit } })
        const data = new subscriptionModel({ userId, planId });
        const result = await data.save();
        res.json({
            code: 200,
            success: true,
            message: "Plan purchased successfully",
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
