import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Checkout from '../CheckOut/Checkout/Checkout';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>welcome to details of {serviceId}</h1>
            <div className='text-center'>
                <Checkout></Checkout>
            </div>
        </div>
    );
};

export default ServiceDetail;