import React, {Component} from 'react';
import axios from 'axios';

class ProductDetail extends Component {
    state = {
        status: 'LOADING',
        products:[]
    }
    render(){
        let el;
        switch(this.state.status){
            case 'LOADING':
                el = (
                    <div className="alert alert-info">
                        Products are being fetched.
                    </div>
                );
                break;
            case 'LOADED':
                el = (
                    <div className="row">
                        <div className="col-12 my-4">
                            {this.state.products.name}
                            <hr/>
                        </div>
                        <div className="col-4">
                            <img src={this.state.products.imageUrl} alt={this.state.products.name} className="img-fluid"/>
                        </div>
                        <div className="col-8">
                            <p style={{ fontSize: '1.5em'}}>
                                {this.state.products.description}
                            </p>
                            <section>
                                <div>Rating:{this.state.products.starRating}/5</div>
                                <div>Price:${this.state.products.price}</div>
                                <button className="btn btn-primary">
                                    Buy
                                </button>
                            </section>
                        </div>
                    </div>
                );
                break;
            case 'ERROR':
                el = (
                    <div className="alert alert-info">
                        <h4>Unable to fetch products</h4>
                        <hr/>
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
                <h2>Product Catalog</h2>
                {el}
            </div>
        );
    }
    componentDidMount() {
        axios.get(`https://awesome-store-server.herokuapp.com/products/${this.props.match.params}?_embed=reviews`)
        .then(response => response.data)
        .then(products => {
            this.setState({
                products:products,
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