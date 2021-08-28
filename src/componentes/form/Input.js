import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import './Input.css'

function Input({name, label, ...rest}) {
    const inputRef = useRef(null)
    const { fieldName, registerField, error } = useField(name);

   
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);
    return (
        <div className="container-input">
            {label && <label htmlFor={fieldName}>{label}</label>}  
            <input ref={inputRef} id={fieldName} {...rest}/> 
            { error && <span className="error">{error}</span> }         
        </div>      
    )
}

export default Input;




