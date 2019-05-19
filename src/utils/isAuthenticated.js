import axios from 'axios';
import { USER_CURRENT } from '../routes';

export default () => {
    const hasToken = localStorage.getItem('hasToken');
    if (hasToken == "true") {
        const token = localStorage.getItem('token');
        axios.get(USER_CURRENT, {headers: {Authorization: 'Token '+token}}).then(response => {
            //please handle when network error occured;
            if (response.status == 200) {
                localStorage.setItem('username', response.data.user.username);
                localStorage.setItem('isAuthenticated', true);
            } else {
                localStorage.setItem('hasToken', false);
            }
        })
    } else {
        return;
    }
}