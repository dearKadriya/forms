import puppeteer from 'puppeteer'

jest.setTimeout(30000)
describe('popover', () => {
    let browser = null
    let page = null
    const baseUrl = 'http://localhost:9000'
    beforeAll(async () => {
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 100,
            // devtools: true,
        })
        page = await browser.newPage()
    });
    afterAll(async () => {
        await browser.close()
    })
    test('Должен появится popover', async ()=> {
        await page.goto('http://localhost:8888')
        await page.waitForSelector(".button");
        page.click(".button")
        await page.waitForSelector(".showToolTip");

    })
    })
