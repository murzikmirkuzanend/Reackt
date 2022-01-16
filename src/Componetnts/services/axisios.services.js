import axios from "axios";


import baseUrs from "../configs/ursls";

export const services = axios.create({
    baseURL: baseUrs

});
