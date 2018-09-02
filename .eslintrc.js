module.exports = {
    env: {
        jest: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
        'eslint:recommended'
    ],
    plugins: ['import', 'prettier'],
    rules: {
        // console-logging is now *discouraged*. Use other
        // debugging tools along with console logging, and
        // remove debug console logs before deployment
        // Make exceptions for server status console logs with
        // `// eslint-disable-next-line no-console`
        'no-console': 'warn',
        semi: 'error',
    }
};