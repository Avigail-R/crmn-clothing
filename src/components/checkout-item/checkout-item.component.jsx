import './checkout-item.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart,  removeItemFromCart, clearItemFromCart  } from '../../store/cart/cart.action';


const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () =>  dispatch(addItemToCart(cartItems,cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name }</span>
            <span className='quantity'>
                <div className='arrow' onClick={addItemHandler}>
                    &#10094;
                </div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10095;
                </div>
            </span >
            <span className='price'>{price }</span>
            <div onClick={clearItemHandler} className='remove-button' >&#10005;</div>
     </div>
 )
}
export default CheckoutItem;