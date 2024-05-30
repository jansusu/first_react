import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../store/cartslice/Cartslice";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };
  return (
    <>
      <div className="container d-flex ">
        <div className="row crt1">
          <div className="col-lg-12">
            <div className="card">
              <h2 className="card-title text-center">Your Cart</h2>
              <div className="table-resposive">
                <table>
                  <thead className="cartt">
                    <tr>
                      <th>Products</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProduct.map((item) => (
                      <tr className="tr1">
                        <td className="tds" key={item.id}>
                          <img src={item.image} alt="" />
                        </td>
                        <td className="tds1">{item.title}</td>
                        <td className="tds2">{item.ds}</td>
                        <td className="tds2">{item.price}</td>
                        <td className="tds3">{item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteCart(item);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
