import { RequestHandler } from 'express'

export const logging: RequestHandler = async (req, res, next) => {
  console.log(`${req.method} request from ${req.ip} on ${req.originalUrl}`)
  next()
}

export const loggingWithOptions =
  ({ showIp }: { showIp: boolean }): RequestHandler =>
  async (req, res, next) => {
    if (showIp) {
      console.log(`${req.method} request from ${req.ip} on ${req.originalUrl}`)
    } else {
      console.log(`${req.method} request on ${req.originalUrl}`)
    }
    next()
  }
