import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
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
            <div className='navigation'>

                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    { currentUser ? (
                            <span className='nav-link' onClick={signOutUser}> SIGN OUT </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>

                    )}
                   <CardIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}

            </div>
            <Outlet />
        </Fragment>
    );
};
export default Navigation;