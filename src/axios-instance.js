import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-reserved.firebaseio.com/'
})

export default instance;