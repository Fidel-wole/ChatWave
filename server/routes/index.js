import express from "express";

const testRouter = express.Router()

testRouter.get("/", (req, res)=>{
    res.send("Welcome to ChatWave backend service")
})
export default testRouter;