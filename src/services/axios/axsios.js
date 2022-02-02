import axios from "axios";
import baseURL from "../../urls/cars.urls/cars.urls";
import jsonUrls from "../../urls/json.urls/json.urls";

export const axiosServices = axios.create({baseURL});
export const axiosServiceJson = axios.create({jsonUrls});