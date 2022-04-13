import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    const { id, name, img, description, price } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>Name: {name}</h2>
            <p><small>{description}</small></p>
            <p>price:{price}</p>
            <button onClick={() => navigateToServiceDetail(id)}>Book:{name}</button>
        </div>
    );
};

export default Service;