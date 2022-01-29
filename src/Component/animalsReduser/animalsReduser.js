import {services} from "../servis/servis";

const AnimalsReducer = (state, action) => {

    switch (action.type) {
        case services.addCat:
            return {...state, cats: [...state.cats, action.payload.cat]}
        case services.addDog:
            return {...state, dogs: [...state.dogs, action.payload.dog]}
        case services.delCat:
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case services.delDog:
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}

        default:
            return state
    }

};
export default AnimalsReducer;