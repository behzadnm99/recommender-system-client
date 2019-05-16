import axios from 'axios';
import { USER_CURRENT } from '../routes';

export default () => {
    const hasToken = localStorage.getItem('hasToken');
    console.log(hasToken);
    if (hasToken == "true") {
        console.log('asd')
        const token = localStorage.getItem('token');
        axios.get(USER_CURRENT, {headers: {Authorization: 'Token '+token}}).then(response => {
            //please handle when network error occured;
            console.log('in function')
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