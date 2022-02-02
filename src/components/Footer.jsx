import React from "react";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";
import { ReactComponent as Facebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Instagram } from "../assets/shared/desktop/icon-instagram.svg";

function Footer() {
  return (
    <div className="bg-black text-white text-center p-12">
      <div className="flex justify-center">
        <Logo />
      </div>
      <ul className="py-12 space-y-4 uppercase">
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="py-10">Copyright 2021. All Rights Reserved</p>
      <div className="flex justify-center space-x-4">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
    </div>
  );
}

export default Footer;
