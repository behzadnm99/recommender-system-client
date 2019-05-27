export default {
    server: {
        api: {
            url: 'http://localhost:5000/api/',
            timeout: process.env.REACT_APP_API_TIMEOUT
        },
        s3: {
            url: 'http://localhost:9000/'
        }
    }
}