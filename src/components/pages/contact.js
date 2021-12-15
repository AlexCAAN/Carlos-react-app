import React from "react";
import Crusade from "../../assets/images/contact/contact.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const time = (moment().format('LLLL'));

export default function() {
  return (
    <div className="contact-grid">
      <div
        className="left-column"
        style={{
          background: "url(" + Crusade + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="icon-wrapper">
            <FontAwesomeIcon className="contact-icon" icon="clock" />
            <div>
              <h1>My Time is...</h1>
              <h1 className="time">{time}!</h1>
              <h2>My working hours are 9am to 5pm on weekdays, Feel free to contact me then!</h2>
            </div>
        </div>

        <div className="icon-wrapper">
            <FontAwesomeIcon className="contact-icon" icon="phone-alt" />
            <div>
              <h1>My Phone Number is...</h1>
              <h1 className="special">+52 636 121 9574</h1>
              <h2>it's a Mexican number right now but I will update it if anythig happens!</h2>
            </div>
        </div>

        <div className="icon-wrapper">
            <FontAwesomeIcon className="contact-icon" icon="at" />
            <div>
              <h1>My Email is...</h1>
              <h1 className="special">carlosleany1020@gmail.com</h1>
              <h3>or Alternatively</h3>
              <h1 className="special">alexcaan1020@gmail.com</h1>
              <h2>Both work fine! i just have 2!</h2>
            </div>
        </div>
      </div>
    </div>
  )
}