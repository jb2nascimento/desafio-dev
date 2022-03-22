import { NextFunction, Request, Response } from "express";
import { Exception } from "./Exception";

function errorMiddleware(error: Exception, request: Request, response: Response, next?: NextFunction) {
    const status = error.status || 503;
    const message = error.message || "Ops! Falha inesperada.";
    response
        .status(status)
        .send({
            status,
            message,
        });
}

export default errorMiddleware;
