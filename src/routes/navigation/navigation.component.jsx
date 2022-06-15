import { Fragment } from 'react';
import { Outlet} from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from  './navigation.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CartDropdown from '../../components/card-dropdown/card-dropdown.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
   const currentUser = useSelector(selectCurrentUser);
   const  isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <NavigationContainer>

                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    { currentUser ? (
                            <NavLink as="span" onClick={signOutUser}> SIGN OUT </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>

                    )}
                   <CardIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}

            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};
export default Navigation;