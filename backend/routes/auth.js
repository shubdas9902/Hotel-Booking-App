import express from "express";
import { login, signup } from "../controller/auth.controller.js";

const route= express.Router()

route.post("/register",signup)
route.post("/login",login)


export default route