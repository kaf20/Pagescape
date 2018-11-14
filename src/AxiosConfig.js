import axios from 'axios'

let domain = 'http://localhost'
if (process.env.NODE_ENV === 'production')
    domain = 'https://pric.me'
axios.defaults.baseURL = `${domain}/ttcalc-web/api/v1`
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json'