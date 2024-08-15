import { RequestHandler } from 'express'

export const requestTime: RequestHandler = async (req, res, next) => {
  req['requestTime'] = new Date()
  next()
}
