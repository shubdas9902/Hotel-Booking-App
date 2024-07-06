import express from "express";
import { login, logout, signup, validate } from "../controller/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const route= express.Router()

route.post("/register",signup)
route.post("/login",login)
route.get("/validate-token",protectRoute,validate)
route.post("/logout",logout)


export default route