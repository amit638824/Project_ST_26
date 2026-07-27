import express from 'express';
import { userRegister,userLogin } from '../controller/authcontroller.js';
import { adminUserList,adminClientList,adminProjectList } from '../controller/admincontroller.js';
import { postProject ,clientProjectList} from '../controller/clientcontroller.js';
const router=express.Router();
router.post("/register",userRegister)
router.post("/login",userLogin)
// admin api
router.get('/admin-users-list',adminUserList)
router.get('/admin-clients-list',adminClientList)
router.get('/admin-project-list',adminProjectList)
//client api
router.post('/client-post-project',postProject)
router.get('/client-project-list',clientProjectList)

export default router;