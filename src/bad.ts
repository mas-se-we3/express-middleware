import { RequestHandler } from 'express'

export const noNextLogging: RequestHandler = async (req, res, next) => {
  console.log(`${req.method} request from ${req.ip} on ${req.originalUrl}`)
}

export const resSendAndNext: RequestHandler = async (req, res, next) => {
  res.sendStatus(400)
  next()
}
