import React, { Fragment } from "react";

const Button = (props) => {
  const { url, color, text, logo, alt } = props;

  return (
    <Fragment>
      <a
        href={url}
        className={`button text-white text-[clamp(1rem,1.25vw,1rem)] ${color}`}
      >
        {logo ? <img src={logo} alt={alt} className="mr-2 xl:h-20px" /> : null}
        {text ? text : null}
        {props.children}
      </a>
    </Fragment>
  );
};

export default Button;
