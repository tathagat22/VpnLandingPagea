import React from "react";
import Section from "../UI/Section";
import Image from "../UI/images";
import NetworkSponsors from './NetworkSponsors';

import classes from './Network.module.css';
import NetworkImage from '../../assets/images/Map.svg';

const Network = () => {
    return (
      <Section className={classes.Network}>
        <header>
            <h2>Huge Global Network of Fast VPN</h2>
            <p>
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
            </p>
        </header>
        <figure>
        <Image
          image={NetworkImage}
          description="Huge Global Network of Fast VPN"
          className={classes.image}
        />
        </figure>

        <NetworkSponsors/>
      </Section>
    );
}

export default Network;