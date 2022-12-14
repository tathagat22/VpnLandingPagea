import React from "react";

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button className={`${classes.Btn} ${props.className}`}>
            {props.children}
        </button>
    );
};

export default Button;