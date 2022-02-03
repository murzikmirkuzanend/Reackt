import {axiosServiceJson} from "../axios/axsios";
import {urlsJson} from "../../urls/json.urls/json.urls";


export const usersServices ={
    getAll:()=> axiosServiceJson.get(urlsJson.users)
        .then(value => value.data)
}

export const postsServices ={
    getAll:()=> axiosServiceJson.get(urlsJson.posts)
        .then(value => value.data)
}

export const commentsServices ={
    getAll:()=> axiosServiceJson.get(urlsJson.comments)
        .then(value => value.data)
}