const chromium = require('chrome-aws-lambda')

module.exports.getBrowser = async (opts = {}) => {
	const headless = process.env.IS_OFFLINE !== 'true'
	const executablePath = headless ? await chromium.executablePath : null
	return chromium.puppeteer.launch({
		headless,
		executablePath,
		args: chromium.args,
		ignoreHTTPSErrors: true,
		...opts
	})
}
