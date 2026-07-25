export const userRegister = (req, res) => {
    const {type,name,email,password}=req.body;
    res.send({type,name,email,password})
}