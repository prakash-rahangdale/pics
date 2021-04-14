import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3CgM5Ubw322vePeDDCSaYH2xk5oFQLk0il6xAH58bXY'
    }
});
