import React from "react";
import { GiChicken } from "react-icons/gi";
import Peri from "../products/Peri";
import Values from "../products/Values";
import Croll from "../products/Crolls";
import Cbucket from "../products/Cbucket";
import Biryani from "../products/Biryani";
import Box from "../products/Box";
import Burgers from "../products/Burgers";
import Snacks from "../products/Snacks";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import Beverages from "../products/Beverages";

const Menu = () => {
  return (
    <>
      <section className="menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <ul>
                <h2>
                  <GiChicken />
                  KFC MENU
                </h2>
                <li>
                  <a href="#peri">PERI PERI CHICKEN</a>
                </li>
                <li>
                  <a href="#val">VALUE SNACKERS</a>
                </li>
                <li>
                  <a href="#rolls">CHICKEN ROLLS</a>
                </li>
                <li>
                  <a href="#rolls">CHICKEN ROLLS</a>
                </li>
                <li>
                  <a href="#buckets">CHICKEN BUCKETS</a>
                </li>
                <li>
                  <a href="#briya">BIRYANI BUCKETS</a>
                </li>
                <li>
                  <a href="#meals">BOX MEALS</a>
                </li>
                <li>
                  <a href="#bB">BURGERS</a>
                </li>
                <li>
                  <a href="#sS">SNACKS</a>
                </li>
                <li>
                  <a href="#bv">BEVERAGES</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 rc">
              <div className="row">
                <h2 id="peri">PERI PERI CHICKEN</h2>
                {Peri.map((item) => (
                  <div className="col-lg-6 mt-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} alt="" />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.ds}</p>
                        <a href="#" className="btn btn-danger">
                          <MdOutlineAddShoppingCart />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <h2 id="val">VALUE SNACKERS</h2>
                {Values.map((item) => (
                  <div className="col-lg-6 mt-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} className="card-img-top" alt=".." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>

                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.ds}</p>
                        <a href="#" className="btn btn-danger">
                          <MdOutlineAddShoppingCart />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <h2 id="rolls">CHICKEN ROLLS</h2>
                {Croll.map((item) => (
                  <div className="col-lg-6 mt-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} className="card-img-top" alt=".." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.ds}</p>
                        <a href="#" className="btn btn-danger">
                          <MdOutlineAddShoppingCart />
                          ADD TO Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <h2 id="buckets">CHICKEN BUCKETS</h2>
                {Cbucket.map((item) => (
                  <div className="col-lg-6 mt-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} className="card-img-top" alt=".." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.ds}</p>
                        <a href="#" className="btn btn-danger">
                          <MdOutlineAddShoppingCart />
                          ADD TO Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <h2 id="briya">BIRYANI BUCKETS</h2>
                {Biryani.map((item) => (
                  <div className="col-lg-6 mt-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} className="card-img-top" alt=".." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.ds}</p>
                        <a href="#" className="btn btn-danger">
                          <MdOutlineAddShoppingCart />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <h2 id="meals">BOX MEALS</h2>
                {Box.map((item) => (
                  <div className="col-lg-6 mt-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} className="card-img-top" alt=".." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.ds}</p>
                        <a href="#" className="btn btn-danger">
                          <MdOutlineAddShoppingCart />
                          ADD TO Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <h2 id="bB">BURGERS</h2>
                {Burgers.map((item) => (
                  <div className="col-lg-6 mt-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} className="card-img-top" alt=".." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.ds}</p>
                        <a href="#" className="btn btn-danger">
                          <MdOutlineAddShoppingCart />
                          ADD TO Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <h2 id="sS">SNACKS</h2>
                {Snacks.map((item) => (
                  <div className="col-lg-6 mt-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} className="card-img-top" alt=".." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.ds}</p>
                        <a href="#" className="btn btn-danger">
                          <MdOutlineAddShoppingCart />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <h2 id="bv">BEVERAGES</h2>
                {Beverages.map((item) => (
                  <div className="col-lg-6 mt-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} className="card-img-top" alt=".." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.ds}</p>
                        <a href="#" className="btn btn-danger">
                          <MdOutlineAddShoppingCart />
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
