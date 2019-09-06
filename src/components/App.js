import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route } from 'react-router-dom';
import About from './about';
import ProductsList from './ProductsList'
import ProductsDetail from './ProductDetail';

class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <Link className="navbar-brand" to="/">AwesomeStore</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/products">Products <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route path="/" component={About} exact={true}/>
                <Route path="/products" component={ProductsList} exact={true}/>
                <Route path="/products/:id" component={ProductsDetail} exact={true}/>
            </div>
        );
    }
}
export default App;