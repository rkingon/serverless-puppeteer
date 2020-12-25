const { getBrowser } = require('../services/browser')

module.exports.handler = async () => {
	const browser = await getBrowser()
	const page = await browser.newPage()
	await page.goto('https://www.google.com', { waitUntil: 'networkidle0' })
	await browser.close()
	return null
}
