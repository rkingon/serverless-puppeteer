# Serverless Puppeteer

## Install Dependencies
`yarn install`

## Access Serverless
`yarn sls [command]`

## Add your AWS credentials
`yarn sls config credentials --provider aws --key {YOUR_KEY} --secret {YOUR_SECRET}`

## Local dev
`yarn dev`

## Deploy to AWS Lambda
`yarn deploy`

## View Lambda information
`yarn sls info`

## View prod logs
`yarn sls logs -f [functionName]`
