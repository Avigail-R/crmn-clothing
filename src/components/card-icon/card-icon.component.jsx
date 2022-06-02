import './card-icon.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

import{ ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CardIcon = () => {

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCardOpen =() =>  setIsCartOpen(!isCartOpen);

    return(
    <div className='cart-icon-container' onClick={toggleIsCardOpen} >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
        </div>
    )
}
export default CardIcon