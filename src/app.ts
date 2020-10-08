import express from 'express'
import cors from 'cors'

import routes from './routes'

class App {
    public expressApp: express.Application

    public constructor () {
      this.expressApp = express()
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.expressApp.use(express.json())
      this.expressApp.use(cors())
    }

    private routes (): void {
      this.expressApp.use(routes)
    }
}

export default new App().expressApp
