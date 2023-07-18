import { Request, Response } from "express";
import httpStatus from "http-status";
import * as peopleService from "@/services/preople-service";

export async function getPerson(req: Request, res: Response) {
  try {
    const result = await peopleService.servicePerson();
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
