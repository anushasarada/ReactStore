import React, { Component } from 'react';
import axios from 'axios';
import ProductsService from '../services/products';
import Reviews from './Reviews';

class ProductDetail extends Component {
    state = {
        status: 'LOADING',
        products: []
    }
    render() {
        let el;
        switch (this.state.status) {
            case 'LOADING':
                el = (
                    <div classNameName="alert alert-info">
                        Products are being fetched.
                    </div>
                );
                break;
            case 'LOADED':
                el = (
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-4">
                                <h1>{this.state.products.name}</h1>
                                <hr />
                            </div>
                            <div className="col-4">
                                <img src={this.state.products.imageUrl} alt={this.state.products.name} className="img-fluid" />
                            </div>
                            <div className="col-8">
                                <p style={{ fontSize: '1.5em' }}>
                                    {this.state.products.description}
                                </p>
                                <br/>
                                <section>
                                    <div>Rating:{this.state.products.starRating}/5</div>
                                    <br/>
                                    <div>Price:${this.state.products.price}</div>
                                    <br/>
                                    <button className="btn btn-primary">
                                        Buy
                                    </button>
                                </section>
                            </div>
                            <div className="col-12">
                                <Reviews reviews={this.state.products.reviews}/>
                            </div>
                        </div>
                        <br/>
                        <h2>Add a review</h2>
                        <hr></hr>
                        <form /* (ngSubmit)="addReview($event)" */>
                            <div className="form-group">
                                <label for="name">Your name:</label>
                                <input type="text" name="name" id="name" className="form-control" placeholder="" aria-describedby="helpId" /* [(ngModel)]=review.reviewer */ />
                                <small id="helpId" className="text-muted">Your name goes in here</small>
                            </div>
                            <div className="form-group">
                                <label for="rating">Rating:</label>
                                <select name="rating" id="" className="form-control" aria-describedby="helpStarRating" /* [(ngModel)]=review.starRating */>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <small id="helpStarRating" className="text-muted">Your rating (1-least, 5-highest))</small>
                            </div>
                            <div className="form-group">
                                <label for="title">Your title for the review:</label>
                                <textarea name="title" id="title" className="form-control" aria-describedby="helpTitle" /* [(ngModel)]=review.title */></textarea>
                                <small id="helpTitle" className="text-muted">Your title for the review goes in here...</small>
                            </div >
                            <div className="form-group">
                                <label for="review">Your review:</label>
                                <textarea name="review" id="review" className="form-control" aria-describedby="helpReview" /* [(ngModel)]=review.text */></textarea>
                                <small id="helpReview" className="text-muted">Your review for the product goes in here...</small>
                            </div >
                            {/* <div className="form-group">
                                <button type="submit" value="Add review" />
                            </div> */}
                            <button className="form-group btn btn-primary" type="submit">
                                Add review
                            </button>
                        </form >
                    </div>
                );
                break;
            case 'ERROR':
                el = (
                    <div classNameName="alert alert-info">
                        <h4>Unable to fetch products</h4>
                        <hr />
                        {this.state.error.message}
                    </div>
                );
                break;
            default:
                el = (
                    <div classNameName="alert alert-info">
                        Something wrong.
                        </div>
                );
                break;
        }
        return (
            <div>
                {el}
            </div>
        );
    }
    componentDidMount() {
        ProductsService.getProduct(this.props.match.params.id)
            .then(products => {
                this.setState({
                    products: products,
                    status: 'LOADED'
                })
            })
            .catch(error => {
                this.setState({
                    error: error,
                    status: 'ERROR'
                });
            })
    }
}

export default ProductDetail;