import express from "express"
import { login, updateProfile, logout, register } from '../controller/user.controller.js'


const router =express.Router()



// router.route("/register").post((req,res)=>res.send("user has been created"))
// router.route("/login").post((req,res)=>res.send("user has been loged in"))
// router.route("/profile/update").post((req,res)=>res.send("user has been updated"))
// router.route("/logout").get((req,res)=>res.send("user has been logout"))

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/profile/update").post(updateProfile)
router.route("/logout").get(logout)

export default router