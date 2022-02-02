import {axiosServices} from "../axios/axsios";
import {urls} from "../../urls/cars.urls/cars.urls";


export const carsServices = {
    getAll: () => axiosServices.get(urls.cars)
        .then(value => value.data),
    deleteById: (id) => axiosServices.delete(`${urls.cars}/${id}`)
        .then(value => value.data),
    create: (car) => axiosServices.post(`${urls.cars}`, car)
        .then(value => value.data)
}