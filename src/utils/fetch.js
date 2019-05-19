import axios from 'axios';
import config from '../consts';

const configs = config.server.api

axios.defaults.baseURL = configs.url;
axios.defaults.timeout = configs.timeout;

export default async option => {

    const options = Object.assign(
        {},
        {
          url: undefined,
          method: undefined,
          data: {},
          headers: {},
          formData: false
        },
        option
    );
    const hasToken = localStorage.getItem('hasToken');
    if(hasToken == "true") {
      options.headers.authorization = 'Token ' + localStorage.getItem('token') || '';
    }
    const request = {
        ...options,
        headers: {
            ...options.headers
        }
    }
    try {
        const response = await axios(request);
        return response;
    } catch(err) {
      if( err.response && (err.response.data.Message === "invalid or expired jwt" || err.response.data.Message === "missing or malformed jwt")){
            localStorage.clear()
            window.location.assign('/')
        } if (err.response){
          throw err.response.data.Message
        } else {
          throw 'probably network err or 301 error'
        }
    }
}
