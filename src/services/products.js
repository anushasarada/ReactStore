
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
    },
    /* addReview(id, review){
        return this.http.post(
          `http://awesome-store-server.herokuapp.com/products/${id}/reviews`,
          review,
          {
            headers: new HttpHeaders({
            'Content-Type':'application/json'
            })
          }
        )
    } */
}
 
export default ProductsService;