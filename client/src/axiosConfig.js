import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})
//  cấu hình interceptor
// Add a request interceptor - Trước khi axios gởi API-Request lên cho server   
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  // Gắn token vào header
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // refresh token
  return response;
}, function (error) {

  return Promise.reject(error);
});

export default instance