import {urls} from "../configs/ursls";

const getAll = () => {

    return fetch(urls.users)
        .then(value => value.json())

}

const getBayId = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(value => value.json())
}

const GetBayIdPost = (id,posts) => {
return fetch(`${urls.users}/${id}/${posts}`)
    .then(value => value.json())
}

export const userService = {
    getAll,
    getBayId,
    GetBayIdPost
}