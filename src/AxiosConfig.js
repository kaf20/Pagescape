import axios from 'axios'

axios.defaults.baseURL = 'http://www.pric.me:6080/ttcalc-web'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json'