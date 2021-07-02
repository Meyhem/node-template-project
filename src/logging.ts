import winston, { format } from 'winston'
import 'winston-daily-rotate-file'

const logFormat = winston.format.printf(function (info) {
  return `${info.timestamp}-${info.level}: ${JSON.stringify(info.message, null, 4)}\n`
})

export const logger = winston.createLogger({
  level: 'info',

  transports: [
    new winston.transports.Console({
      format: format.combine(format.timestamp(), format.splat(), format.colorize(), logFormat),
      ...{ timestamp: true as any }
    }),
    new winston.transports.DailyRotateFile({
      format: format.combine(format.timestamp(), format.splat(), format.json()),
      filename: './logs/ssr.log',
      datePattern: '.yyyy-MM-dd',
      ...{ timestamp: true as any }
    })
  ]
})
