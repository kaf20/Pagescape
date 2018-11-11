import axios from 'axios'

axios.defaults.baseURL = 'https://www.pric.me/ttcalc-web'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json'