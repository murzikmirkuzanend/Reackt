import React, {useReducer} from 'react';

import './css.css'

const UseReducer = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INC':
                return {...state, caunt1: state.caunt1 + 1}
            case "dec":
                return {...state, caunt1: state.caunt1 - 1}
            case "reset":
                return {...state, caunt1: state.caunt1 = 0}
            case 'INC2':
                return {...state, caunt2: state.caunt2 + 2,}
            case "dec2":
                return {...state, caunt2: state.caunt2 - 1,}
            case "reset2":
                return {...state, caunt2: state.caunt2 = 0,}
            case 'INC3':
                return {...state, caunt3: state.caunt3 + 3}
            case "dec3":
                return {...state, caunt3: state.caunt3 - 1}
            case "reset3":
                return {...state, caunt3: state.caunt3 = 0}
        }
    }
    const [state, dispatch] = useReducer(reducer, {caunt1: 0, caunt2: 0, caunt3: 0});
    return (

        <div className={'header'}>

            <div className={'state1'}>

                <div className={'caunt1'}>{state.caunt1}</div>

                <button onClick={() => dispatch({type: 'INC'})}>INC</button>

                <button onClick={() => dispatch({type: 'dec'})}>DEC</button>

                <button onClick={() => dispatch({type: 'reset', payload: 0})}>RESET</button>
            </div>

            <div className={'state2'}>

                <div className={'caunt2'}>{state.caunt2}</div>

                <button onClick={() => dispatch({type: 'INC2'})}>INC</button>

                <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>

                <button onClick={() => dispatch({type: 'reset2', payload: 0})}>RESET</button>

            </div>

            <div className={'state3'}>

                <div className={'caunt3'}>{state.caunt3}</div>

                <button onClick={() => dispatch({type: 'INC3'})}>INC</button>

                <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>

                <button onClick={() => dispatch({type: 'reset3', payload: 0})}>RESET</button>

            </div>
        </div>
    );
};

export default UseReducer;