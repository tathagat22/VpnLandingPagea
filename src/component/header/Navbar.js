import Image from "../UI/images";

import Button from "../UI/Button";

import Logo from '../../assets/images/logo.svg';

import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <div className={classes.Navbar}>
            <figure className={`${classes.col} ${classes.Logo}`}>
                <Image image={Logo} description="LaslesVPN" />
            </figure>

            <div className={`${classes.col} ${classes.mainNav}`}>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div className={`${classes.col} ${classes.remNav}`}>
                <Button className={classes.btn}>Sign In</Button>
                <Button className={`${classes.btn} ${classes.active}`}>Sign up</Button>
            </div>          
        </div>

    );
};

export default Navbar;