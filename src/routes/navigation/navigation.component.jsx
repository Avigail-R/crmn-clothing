import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from  './navigation.styles';
import { UserContext } from '../../contexts/user.content';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CartDropdown from '../../components/card-dropdown/card-dropdown.component';
import { CartContext } from '../../contexts/cart';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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