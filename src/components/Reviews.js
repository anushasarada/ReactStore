import React from 'react';

const Reviews = ({ reviews }) => {
    //const {reviews} = props above is the short form
    return (
        <React.Fragment>
            <h3 className="my-4"> Reviews for the product:</h3>
            <ul className="list-group">
                {
                    reviews.map(review => (
                        <div key={review.id}>  
                            <li className="list-group-item">
                                <p><span style={{ fontWeight: 'bold'}}> Name : </span>{review.reviewer}</p>
                                <p><span style={{ fontWeight: 'bold'}}> Rating : </span>{review.starRating} out of 5</p>
                                <p><span style={{ fontWeight: 'bold'}}> Title for review : </span>{review.title}</p>
                                <p><span style={{ fontWeight: 'bold'}}> Review : </span>{review.text}</p>
                            </li>
                            <br />
                        </div>
                    ))
                }
            </ul>
        </React.Fragment>
    );
}

export default Reviews;