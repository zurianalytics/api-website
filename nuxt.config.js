export default {
    env: {
        api: 'https://test-api.zurianalytics.com'
    },
    plugins: [
        '~/plugins/vue-observable',
        '~/plugins/tippy',
        '~/plugins/json-renderer'
    ],
    build: {
        publicPath: ''
    }
}