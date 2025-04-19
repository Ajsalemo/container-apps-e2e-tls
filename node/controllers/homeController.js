import { Router } from "express";
const router = Router();

export const homeController = router.get("/", (_, res) => {
    try {
        res.json("container-apps-e2e-tls-node");
    } catch (error) {
        console.log("An error has occurred: ", error);
        next(error);
    }
});