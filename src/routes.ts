import { Router } from 'express'
import PdfController from './controller/pdf/PdfController'

const routes = Router()

routes.get('/pdfs', PdfController.index)

export default routes
