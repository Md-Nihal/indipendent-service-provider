import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, image, comment } = review
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div >
                <Card className='w-100 rounded' style={{ background: 'rgb(143, 214, 143)' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {comment}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div >

    );
};

export default Review;