import express from 'express';
import { userRegister,userLogin } from '../controller/authcontroller.js';
import { adminUserList } from '../controller/admincontroller.js';
import { postProject } from '../controller/clientcontroller.js';
const router=express.Router();
router.post("/register",userRegister)
router.post("/login",userLogin)
// admin api
router.get('/admin-users-list',adminUserList)
//client api
router.post('/client-post-project',postProject)
export default router;