import cart from "./assets/cart.png"

const CartWidget = () => {
    return (
        <div className="columns">
            <div className="column is-half">
            <img src={cart} alt="cart-widget" />
            0
            </div>
        </div>
    )
}

export default CartWidget