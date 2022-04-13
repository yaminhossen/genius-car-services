import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>This is services detail: {serviceId}  </h3>
            <div className="text-center">
                <Link to="/cheakout">
                    <button className='btn btn-primary'>Proceed cheakout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;