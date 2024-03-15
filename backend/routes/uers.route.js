import express from 'express'
import {updateUser, deleteUser,  getUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utilis/verifyUser.js';
const router = express.Router();


router.post('/update/:id',verifyToken ,updateUser)
router.delete('/delete/:id',verifyToken ,deleteUser)
//router.get('/addTips/:id', verifyToken, getUserListing)
router.get('/:id', verifyToken, getUser)


export default router