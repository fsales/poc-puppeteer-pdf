import { Request, Response } from 'express'
import puppeteer from 'puppeteer'
class PdfController {
  public async index (req: Request, res: Response) : Promise<Response> {
    /* const pdf = await page.pdf({
        path: pathArquivo,
        format: "A4",
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: `<div></div>`,
        footerTemplate: `
        <div style="width: 100%; font-size: 7px; text-align: center;">
            Página <span class="pageNumber"></span> / <span class="totalPages"></span>
        </div>
        `,
        margin: {
            top: '38px',
            right: '38px',
            bottom: '38px',
            left: '38px'
        },
        scale: scale
    }); */

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://google.com')
    await page.pdf({
      path: './google.pdf',
      format: 'A4',
      printBackground: true,
      headerTemplate: '<div></div>',
      footerTemplate: `
    <div style="width: 100%; font-size: 7px; text-align: center;">
        Página <span class="pageNumber"></span> / <span class="totalPages"></span>
    </div>
    `,
      margin: {
        top: '38px',
        right: '38px',
        bottom: '38px',
        left: '38px'
      },
      scale: 1
    })
    await browser.close()

    return res.json('teste')
  }
}

export default new PdfController()
