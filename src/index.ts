import express from 'express'
import { config } from './config'
import { logger } from './logging'

const app = express()

app.use(express.static('files'))

app.listen(config().port, () => {
  logger.info('Server listening on %s', config().port)
})
