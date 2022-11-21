import React from "react";
import Image from "../UI/images";
import NetflixImage from '../../assets/images/Netflix.svg';
import RedditImage from  '../../assets/images/Reddit.svg';
import AmazonImage from '../../assets/images/Amazon.svg';
import DiscordImage from '../../assets/images/Discord.svg';
import SpotImage from '../../assets/images/Spot.svg';

import classes from './NetworkSponsors.module.css';
const images = [{name: "Netflix",image: NetflixImage}, {name: "Reddit",image: RedditImage}, {name: "Amazon",image: AmazonImage}, {name: "Discord",image: DiscordImage},{name: "Spotify", image: SpotImage}]

const mappedImages = images.map((image) => {
    return <figure key={image.name} className={classes.Sponsors}>
        <Image image={image.image} description={image.name} className={classes.Image}/>
    </figure>
})


//JSX
const NetworkSponsors = () => {
    return <div className={`${classes.NetworkSponsors} ${classes.row}`}>{mappedImages}</div>;
}

export default NetworkSponsors;
