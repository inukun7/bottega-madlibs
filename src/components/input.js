import React from 'react';

const  Input = ({title, state, name}, onChange, index) => {
    return (
        <div key={index} className="input">
            <lebel className="input__number"> {index + 1} </lebel>
            <input name={name} value={state} onChange={onChange}/>
            <label class className="title">{title}</label>
        </div>
    )
}

export default Input;