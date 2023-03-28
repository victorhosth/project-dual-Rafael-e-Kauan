import { Request, Response } from "express";

export const home = async (req: Request, res: Response) => {
    res.render('pages/home');
}

export const admin = (req: Request, res: Response) => {
    res.render('pages/admin');
}