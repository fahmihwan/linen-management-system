import axios from "axios";
const httpRequest = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

httpRequest.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpRequest.interceptors.response.use(
    (response) => {
        if (response?.config?.method !== "get") {
            // console.log("hhhhhh", response);
            console.log(response?.data?.message);
        }
        return response;
    },
    (error) => {
        if (typeof error.response === "undefined") {
            console.log("something wrong");
        }
        if (error?.response?.data?.message) {
            console.log(error?.response?.data?.message);
        }
        if (error?.response?.status === 401) {
            console.log(error?.response?.data?.message);
            // window.localStorage.clear();
            // window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default httpRequest;
