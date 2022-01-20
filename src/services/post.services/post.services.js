import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../configs/Urls";


export const postServices = {
    getAll: () => axiosServices.get(urls.posts).then(value => value.data),
    getByPostsId: (id) => axiosServices.get(`${urls.posts}/${id}`).then(value => value.data),
    getByComments: (id) => axiosServices.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}