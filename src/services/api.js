import axios from 'axios';

//api json-server
const api = axios.create({
    baseURL: 'http://localhost:3333'
});
// //api node backend
// const apiNode = axios.create({
//     baseURL: 'http://localhost:3004'
// });

export default api;

//export default apiNode;