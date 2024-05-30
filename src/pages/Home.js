import React from "react";
import KfcH from "../images/KfcH.webp";
import Ppc from "../images/Ppc.jpg";
import Vs from "../images/Vs.jpg";
import Cr from "../images/Cr.jpg";
import Cb from "../images/Cb.jpg";
import Bb from "../images/Bb.jpg";
import Bm from "../images/Bm.jpg";
import B from "../images/B.jpg";
import BV from "../images/BV.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <img src={KfcH} className="w-100" alt="" />
          <p className="cat">BROWSE CATAGORIES</p>
        </div>
        <div className="hm">
          <div className="container text-center fw-bold ">
            <div className="row mt-5 ">
              <div className="col-lg-3">
                <Link to="/menu">
                  <img className="w-100" src={Ppc} alt="" />
                </Link>
                PERI PERI CHICKEN
              </div>
              <div class="col-lg-3">
                <img className="w-100" src={Vs} alt="" />
                VALUE SNACKS
              </div>
              <div class="col-lg-3">
                <img className="w-100" src={Cb} alt="" />
                CHICKEN BUCKETS
              </div>
              <div class="col-lg-3">
                <img className="w-100" src={Cr} alt="" />
                CHICKEN ROLL
              </div>
            </div>
            <div className="row mt-5">
              <div class="col-lg-3 ">
                <img className="w-100" src={Bb} alt="" />
                BIRIYANI BUCKETS
              </div>
              <div class="col-lg-3 ">
                <img className="w-100" src={Bm} alt="" />
                BOX MEALS
              </div>
              <div class="col-lg-3 ">
                <img className="w-100" src={B} alt="" />
                BURGERS
              </div>
              <div class="col-lg-3 ">
                <img className="w-100" src={BV} alt="" />
                BEVERAGES
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
