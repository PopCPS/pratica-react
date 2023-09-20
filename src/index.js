import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

const StartButton = () =>{
    return (
        <button className='botao botao-iniciar' >Find us!</button>
    )
}

const Form = () =>{
    return (
        <form className='form form-user-info'>
            <Input valueType='text' />
            <Input valueType='number' />
            <Input valueType='text' />
            <Input valueType='number' />
        </form>
    )
}

const Input = (valueType, inputName) =>{
    const errorMessage = ['campo obrigatorio'] 
    return (
        <div className='input-field'>
            <h4 className='input-error-message'>{errorMessage}</h4>
            <input name={inputName} type={valueType} className='input-text-box'></input>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Form />)