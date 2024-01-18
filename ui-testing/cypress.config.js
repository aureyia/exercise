const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const webpack = require('@cypress/webpack-preprocessor')
const envFile = require(`./cypress/config/${
  process.env['CONFIG_FILE'] || 'staging'
}.js`)

module.exports = {
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  video: true,
  videoUploadOnPasses: false,
  reporter: 'mocha-allure-reporter',

  e2e: {
    setupNodeEvents,
    baseUrl: envFile.baseUrl,
    specPattern: 'cypress/features/**/*.feature',
    excludeSpecPattern: '*.js'
  },

  env: envFile.env,

  component: {
    devServer: {
      framework: 'vue-cli',
      bundler: 'webpack'
    }
  },

  stepDefinitions: ['cypress/support/step_definitions/**/*.{js,ts}']
}

async function setupNodeEvents (on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          fallback: { 'path': require.resolve('path-browserify') },
          extensions: ['.jsx', '.js', '.tsx', '.ts']
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config
                }
              ]
            }
          ]
        }
      }
    })
  )

  return config
}
