import {services} from "./axisios.services";
import {urls} from "../configs/ursls";


export const userServices = {
    getAll: () => services.get(urls.users).then(value => value.data)
}