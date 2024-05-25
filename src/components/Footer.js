import React from "react";
import KFCf from "../images/KFCf.svg";
import GPAYF from "../images/GPAYF.svg";
import ASf from "../images/ASf.svg";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="foot">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1">
            <div className="row">
              <div className="col-lg-12">
                <img src={KFCf} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row fw-bold">
              <div className="col-sm-3">Legal</div>
              <div className="col-sm-3">KFC India</div>
              <div className="col-sm-3">KFC Food</div>
              <div className="col-sm-3">Support</div>
            </div>
            <div className="row">
              <div className="col-sm-3">Terms and Conditions</div>
              <div className="col-sm-3">About KFC</div>
              <div className="col-sm-3">Menu</div>
              <div className="col-sm-3">Get Help</div>
            </div>
            <div className="row">
              <div className="col-sm-3">Privacy Policy</div>
              <div className="col-sm-3">KFC Care</div>
              <div className="col-sm-3">Order Lookup</div>
              <div className="col-sm-3">Contact Us</div>
            </div>
            <div className="row">
              <div className="col-sm-3">Disclaimer</div>
              <div className="col-sm-3">Careers</div>
              <div className="col-sm-3">Gift Card</div>
              <div className="col-sm-3">KFC Feedback</div>
            </div>
            <div className="row">
              <div className="col-sm-3">Caution Notice</div>
              <div className="col-sm-3">Our Golden Past</div>
              <div className="col-sm-3">Nutrition & Allergen</div>
              <div className="col-sm-3">Privacy Policy</div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="row">
              <div className="col-lg-12">
                <Link to="https://www.google.com/maps/place/KFC/@11.0683758,76.9403623,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8f757119a3e27:0x4c7f7983d6aa9fe8!8m2!3d11.0683758!4d76.94">
                  <MdLocationOn />
                </Link>
                Find Location
              </div>
            </div>
          </div>
          <div className="col-lg-1 foot1">
            <div className="row">
              <div className="col-lg-12">
                <img src={GPAYF} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-1 foot1">
            <div className="row">
              <div className="col-lg-12">
                <img src={ASf} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
