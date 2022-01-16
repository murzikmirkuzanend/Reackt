import {urls} from "../configs/ursls";
import {services} from "./axisios.services";

export const postServices = {

    getByUserId: (id) =>

        services.get(`${urls.posts}?userId=${id}`)

            .then(value => value.data)


}