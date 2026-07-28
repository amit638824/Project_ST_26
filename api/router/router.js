import express from 'express';
import { userRegister,userLogin } from '../controller/authcontroller.js';
import { adminUserList,adminClientList,adminProjectList,createmasterplan ,getmasterplan} from '../controller/admincontroller.js';
import { postProject ,clientProjectList} from '../controller/clientcontroller.js';
import { userProjectList } from '../controller/usercontroller.js';
const router=express.Router();
router.post("/register",userRegister)
router.post("/login",userLogin)
// admin api
router.get('/admin-users-list',adminUserList)
router.get('/admin-clients-list',adminClientList)
router.get('/admin-project-list',adminProjectList)
router.post('/admin-create-plan',createmasterplan);
router.get('/admin-get-plans',getmasterplan)
//client api
router.post('/client-post-project',postProject)
router.get('/client-project-list',clientProjectList)
//user api
router.get('/user-project-list',userProjectList)

export default router;