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
        // console logging is useful for outputting server status to the terminal
        // thus, `no-console` should be disabled
        'no-console': 'off',
        semi: 'error',
    }
};