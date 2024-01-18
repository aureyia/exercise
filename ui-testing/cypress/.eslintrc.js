module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  'extends': [
    // You can eslint rules for this plugin here:
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/recommended.js
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // We're trusting content coming from our API which is not user edited
    'vue/no-v-html': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    newrelic: 'readable',
    VERSION: 'readable',
    BRAND: 'readable',
    QUESTIONNAIRE_API_URL: 'readable',
    provider: 'readable',
    jasmine: 'readable',
    cy: 'writeable',
    Cypress: 'writeable'
  }
}
