import { getPerson } from "@/controllers/people-controller";
import { Router } from "express";

const peopleRouter = Router();

peopleRouter.get("/person", getPerson);

export default peopleRouter;
