import React from 'react';
import './searchbox.style.css'

export  const Searchbox = ({ placeholder, handleChanged}) => (
    <input className='search' 
    type='search' 
    placeholder={placeholder } 
    onChange={handleChanged}></input>
);