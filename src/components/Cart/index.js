// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
let Cart = () => {
  let jwt_token = Cookies.get('jwt_token')
  if (jwt_token === undefined) {
    return <Redirect to="/login" />
  } else {
    return (
      <div className="k">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="img"
        />
      </div>
    )
  }
}
export default Cart
