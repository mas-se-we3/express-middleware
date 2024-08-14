import { RequestHandler } from 'express'

export const scramble: RequestHandler = (req, res, next) => {
  const text = req.body.text
  if (typeof text !== 'string') {
    return res.sendStatus(400)
  }
  let words = text.split(' ')
  words = words.map(w => scrambleText(w))

  req.body.text = words.join(' ')
  next()
}

const scrambleText = (text: string): string => {
  const characters = text.split('')
  const characterMap = characters.map(c => ({
    char: c,
    randomNumber: Math.random(),
  }))
  characterMap.sort((a, b) => b.randomNumber - a.randomNumber)
  return characterMap.map(cm => cm.char).join('')
}
