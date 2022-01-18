import {axiosServices} from "../axios.services/axios.services";
import {urls} from "../../configs/Urls";


export const {commentsServices} = {

    getByCommentsID: (id) => axiosServices.get(`${urls.posts}?postsId=${id}`)

}