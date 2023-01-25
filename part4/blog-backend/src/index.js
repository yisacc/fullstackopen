const app=require("./app")
const mongoose = require('mongoose')
const config = require("./utils/config")
const logger=require("./utils/logger")

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)


const PORT = 3003
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
