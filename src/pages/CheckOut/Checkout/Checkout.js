import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams()
    return (
        <div className='text-center'>
            <h1>Thank you for booking {serviceId}</h1>
            <h4>Have a nice day</h4>
        </div>
    );
};

export default Checkout;