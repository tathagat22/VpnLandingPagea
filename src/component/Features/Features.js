import React from "react";
import Section from "../UI/Section";
import Image from "../UI/images";
import classes from "./Features.module.css";
import FeatureImage from "../../assets/images/Illustration 2.svg";
import Check from "../../assets/images/icon-check.svg";

const features = {
  Function: [
    "Powerful online protection",
    "Internet without borders",
    "Supercharged VPN",
    "No specific time limits",
  ],
};

const featuresList = features.Function.map((featureFnc) => {
    return (
        <li key={featureFnc[0]}>
            <figure>
                <Image image={Check} />
            </figure>
            <span>{featureFnc}</span>
        </li>
    );
});

const Features = () => {
    return (
        <Section className={`${classes.Features} ${classes.row}`}>
            <figure className={`${classes.col}`}>
                <Image image={FeatureImage} description={"Features Image"} className={classes.Image} />
            </figure>
            <div className={classes.col}>
                <h2>We Provide Many Features You Can Use</h2>
                <p>
                    You can explore the features that we provide with fun and have their own functions each features
                </p>
                <ul>{featuresList}</ul>
            </div>
        </Section>
    );
};

export default Features;