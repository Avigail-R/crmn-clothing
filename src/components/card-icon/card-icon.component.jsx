import {ShoppingIcon, CartIconContainer, ItemCount } from'./card-icon.styles'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CardIcon = () => {

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return(
    <CartIconContainer onClick={toggleIsCartOpen} >
      <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CardIcon