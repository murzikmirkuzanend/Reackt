import axios from "axios";

import baseUrl from "../../configs/Urls";


export const axiosServices = axios.create({
    baseURL:baseUrl
});

