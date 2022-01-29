import './App.css'
import {useReducer, useRef} from "react";

import Form from "./Component/form/Form";
import {services} from "./Component/servis/servis";
import animalsReducer from "./Component/animalsReduser/animalsReduser";
import Cats from "./Component/Cats/Cats";
import Dogs from "./Component/Dogs/Dogs";

function App() {


    const [state, dispatch] = useReducer(animalsReducer, {cats: [], dogs: []});

    const catsForm = useRef();
    const dogsForm = useRef();

    const adCat = (e) => {
        e.preventDefault();
        const name = catsForm.current.value;
        if (!name) {
            return
        }
        const cat = {
            id: new Date().getTime(),
            name
        }
        dispatch({type: services.addCat, payload: {cat}})
        catsForm.current.value = ''
    }

    const adDog = (e) => {
        e.preventDefault();
        const name = dogsForm.current.value;
        if (!name) {
            return
        }
        const dog = {
            id: new Date().getTime(),
            name
        }
        dispatch({type: services.addDog, payload: {dog}})
        dogsForm.current.value = ''
    }
    const delateCat = (id) => {
        dispatch({type: services.delCat, payload: {id}})
    }

    const deleteDog = (id) => {
        dispatch({type: services.delDog, payload: {id}})
    }


    return (

        <div >
            <div className={'header'}>
            <Form catsForm={catsForm} dogsForm={dogsForm} adCat={adCat} adDog={adDog}/>
            </div>
            <div className={'down'}>
                <Cats cats={state.cats} deleteCat={delateCat}/>
                <Dogs dogs={state.dogs} deleteDog={deleteDog}/>

            </div>
        </div>


    );
}

export default App;
