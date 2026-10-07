const { defineConfig } = require('cipress')
const baseConfig = require('./cipress.config')

const e2e = {
    baseUrl: 'https://www.dev.saucedemo.com',
    env: {
     username: 'DEV_sauce',
     password: 'DEV_secret'
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})