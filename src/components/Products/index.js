// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
// Write your JS code here
let Products = () => {
  let jwt_token = Cookies.get('jwt_token')
  if (jwt_token === undefined) {
    return <Redirect to="/login" />
  } else {
    return (
      <div className="k">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="img"
        />
      </div>
    )
  }
}
export default Products
