import axios from 'axios';


if (process.env.VUE_APP_API)
    axios.defaults.baseURL = process.env.VUE_APP_API;
else
    axios.defaults.baseURL = 'http://localhost:8010/api';

if (localStorage.getItem('token'))
    axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('token');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Accept'] = 'application/json';

export default axios;