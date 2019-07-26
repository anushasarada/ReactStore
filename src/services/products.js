
import axios from 'axios';

const ProductsService = {
    baseUrl: 'https://awesome-store-server.herokuapp.com/',
    getProducts(){
        return axios.get('https://awesome-store-server.herokuapp.com/products')
        .then(response => response.data)
    },
    getProduct(id){
        return axios.get(`https://awesome-store-server.herokuapp.com/products/${id}?_embed=reviews`)
        .then(response => response.data)
    }
}
 
export default ProductsService;