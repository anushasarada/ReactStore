import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import ProductsService from '../services/products';

class ProductsList extends React.Component {
    state = {
        status: 'LOADING',
        products: []
    }
    render() {
        let el;
        switch (this.state.status) {
            case 'LOADING':
                el = (
                    <div className="alert alert-info">
                        Products are being fetched.
                    </div>
                );
                break;
            case 'LOADED':
                el = (
                    <div>
                        <h2>Product Catalog</h2>
                        <div className="alert alert-info">
                            <div className="row">
                                {
                                    this.state.products.map((product, index) => (
                                        <div className="col-3 my-3" key={product.id}>
                                            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                                                <div className="card" href="/products/:">
                                                    <img className="card-img-top" src={product.imageUrl} alt="" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">{product.name}</h4>
                                                        <p className="card-text">{product.description}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                );
                break;
            case 'ERROR':
                el = (
                    <div className="alert alert-info">
                        <h4>Unable to fetch products</h4>
                        <hr />
                        {this.state.error.message}
                    </div>
                );
                break;
            default:
                el = (
                    <div className="alert alert-info">
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
        ProductsService.getProducts()
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

export default ProductsList;