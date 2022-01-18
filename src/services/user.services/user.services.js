import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../configs/Urls";


export const userServices = {

    getAll: () => axiosServices.get(urls.users).then(value => value.data),

    getByUserId: (id) => axiosServices.get(`${urls.users}/${id}`).then(value => value.data)

}