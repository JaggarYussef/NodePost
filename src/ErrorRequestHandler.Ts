import { NextFunction, Request, Response, Router } from 'express';
export type ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => any;