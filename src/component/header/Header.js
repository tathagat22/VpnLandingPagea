import React from 'react';

//IMPORTED JSX FILES
import Navigation from './Navbar';
import Button from '../UI/Button';
import Image from '../UI/images';


//IMAGE FILES
import HeaderIllustration from '../../assets/images/Illustration 1.svg';
import UserIcon from '../../assets/images/icon-user.svg';
import UserLocation from '../../assets/images/icon-location.svg';
import UserFile from '../../assets/images/icon-server.svg';

//CSS FILES
import classes from './Header.module.css'

const Header = () => {
    return (
      <header className={classes.Header}>
        <Navigation />
        <div className={`${classes.content} ${classes.row}`}>
          <div className={classes.col}>
            <h1>
              Want anything to be easy with{" "}
              <span className={classes.name}>LaslesVPN.</span>
            </h1>
            <p>
              Provide a network for all your needs with ease and fun using
              <span>LaslesVPN</span> discover interesting features from us.
            </p>
            <Button className={classes.btn}>Get Started</Button>
          </div>
          <div className={classes.col}>
            <figure>
              <Image
                image={HeaderIllustration}
                description="WORK WITH LASLESVPN"
                className={classes.Image}
              />
            </figure>
          </div>
        </div>

        <div className={classes.otherinfo}>
          <div className={classes.row}>
            <figure>
              <Image image={UserIcon} className={classes.colIcon} />
            </figure>
            <span className={classes.headerText}>
              <h5>90+ </h5>
              <p>Users</p>
            </span>
          </div>

          <div className={classes.row}>
            <figure>
              <Image image={UserLocation} className={classes.colIcon} />
            </figure>
            <span className={classes.headerText}>
              <h5>30+ </h5>
              <p>Locations</p>
            </span>
          </div>

          <div className={classes.row}>
            <figure>
              <Image image={UserFile} className={classes.colIcon}/>
            </figure>
            <span className={classes.headerText}>
              <h5>50+</h5>
              <p>Servers</p>
            </span>
          </div>
        </div>
      </header>
    );
}

export default Header;
