import { RequestHandler } from 'express'

export const toNumbers: RequestHandler = (req, res, next) => {
  const numbers: (number | string)[] = req.body.numbers

  req.body.numbers = numbers.map(n => (typeof n === 'string' ? Number(n) : n))
  next()
}
