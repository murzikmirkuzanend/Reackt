import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../configs/Urls";


export const userServices = {

    getAll: () => axiosServices.get(urls.users)
        .then(value => value.data),

    getById: (id) => axiosServices.get(`${urls.users}/${id}`)
        .then(value => value.data),

    getByPosts: (id) => axiosServices.get(`${urls.users}/${id}/posts`)
        .then(value => value.data),

    getByAlbums: (id) => axiosServices.get(`${urls.users}/${id}/albums`)
        .then(value => value.data),

    getByPhotos: (id) => axiosServices.get(`${urls.albums}/${id}/photos`)
        .then(value => value.data)

}