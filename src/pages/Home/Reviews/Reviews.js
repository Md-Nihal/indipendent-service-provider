import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const reviews =
    [
            {
                "id": 1,
                "name": "Pritu Reza",
                "image": "https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/100105411_10157981174276201_6280200917941747712_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEtWpbjDorkht2CFL6Zj9JU6hBIu0GuOafqEEi7Qa45pyNQdkP046xUJpmr2uFj9kxzAbKWJjJb-ufO87RcaZf0&_nc_ohc=3JNXcP7EYT4AX_yS0M1&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_lPt29j9nWAPZ9mvHiwHJ3Vlh5DaebHS-Gb0czg0vR3Q&oe=62703904",
                "comment": "Very much happy ti see the photographs of my wedding. Appreciate his dedication for his work."
            },
            {
                "id": 2,
                "name": "Riad Ahmed",
                "image": "https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/132269131_3862860010392925_1350894096022059204_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFemihwBeUXsd8c7OIcX6OvdCpESMk2LPl0KkRIyTYs-Rq7B1O_aUNgwOjmSuiKagGdWRIdvJW_w4j4_kFH4h-1&_nc_ohc=dXH-Ck89B6kAX8SQB2_&_nc_ht=scontent.fdac24-2.fna&oh=00_AT81M82M1quhEfNTc4jqEGK_sSGcDTjQ-jVNacxhwdmsIg&oe=6271D2E3",
                "comment": "The behaviour of this photographer is too good. He talks really gentelly and politely . Besides his other services is very nice."
            },
            {
                "id": 3,
                "name": "Israt Amin",
                "image": "https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/59870511_2207118402715476_4157629385928605696_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeE11bW7TqHvO_QcKDGUD2cAt8s0EgIGYfW3yzQSAgZh9fXtNKXLLNME1xrrUksZfqfwcdseZO2tqfg2t3TNme-q&_nc_ohc=Pl9Z9ZeE5BUAX94Rv7t&tn=47h5xNq37Nrcsxdi&_nc_ht=scontent.fdac24-2.fna&oh=00_AT_fopuXRdys4ZsN3c4qegeO21WwWmbS40v6K2nFE3YMKw&oe=6271AA9E",
                "comment": "Wow!! he have amazing skill and very co-operative. Love his work "
            }
        ]
    return (
        <div id='review' className='container'>
            <h2 className='text-danger text-center mt-5'>Clients Reviews</h2>
            <div className='row'>
               {
                reviews.map(review => <Review
                review = {review}
                key = {review.id}
                ></Review>)
            } 
            </div>
            
        </div>
    );
};

export default Reviews;