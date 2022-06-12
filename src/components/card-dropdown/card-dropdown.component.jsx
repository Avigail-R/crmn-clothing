import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';
import { CategoriesContext } from '../../contexts/categoties.content';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, EmptyMessage, CartItems} from  './card-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const { categoriesMap } = useContext(CategoriesContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
   }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;