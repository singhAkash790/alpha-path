"use client";
import React, { useState, useEffect } from "react";
import { Dots } from "./svg-components/Dots";
import { Line } from "./svg-components/Line";
import { useData } from "@/context/context";
import { Rupees } from "./svg-components/Rupees";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductDetail = ({ onNextStep, onFormData }) => {
  const [productData, setProductData] = useState([]);
  const { cartState, cartDispatch } = useData();

  useEffect(() => {
    setProductData(cartState.products);
  }, [cartState.products]);

  const calculateSubtotal = () => {
    return productData.reduce((total, product) => {
      return total + product.quantity * product.dis_price;
    }, 0);
  };

  const handleNext = () => {
    onNextStep();
  };

  return (
    <section className="position-relative">
      <div className="container">
        <div className="web-container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="title col-12 float-start text-center">
                <h4 className="grid-center fw-bolder">PRODUCT DETAILS</h4>
              </div>
              <div>
                <div className="formpatient tablecenter">
                  <table>
                    {/* <caption>Product Details</caption> */}
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Package/Test Name</th>
                        <th>Unit Price</th>
                        <th>Discount</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData.map((product, index) => (
                        <tr key={index}>
                          <td data-label="S No.">{index + 1}</td>
                          <td data-label="Package/Test Name">{product.name}</td>
                          <td data-label="Unit Price">
                            <Rupees />
                            {product.quantity * product.price}
                          </td>
                          <td data-label="Discount">{product.discount}%</td>
                          <td data-label="Quantity">{product.quantity}</td>
                          <td data-label="Price">
                            <Rupees />
                            {product.quantity * product.dis_price}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td
                          colSpan={5}
                          className="px-4 text-lg"
                          data-label="Subtotal"
                        >
                          Subtotal
                        </td>
                        <td className="bluecolor redcolor" data-label="Price">
                          <Rupees />
                          {calculateSubtotal()}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="d-flex gap-5 justify-content-end">
                    <div className=" mt-3  row text-right">
                      <button
                        className="edit_cart button button--wayra pull-right red tab3"
                        onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
                      >
                        <FiShoppingCart className="m-2" />
                        Edit Cart
                      </button>
                    </div>
                    <div className=" mt-3  row text-right">
                      <button
                        className="edit_cart button button--wayra pull-right red tab3"
                        onClick={handleNext}
                      >
                        Proceed
                        <FaArrowRightLong className="m-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
      <Line className="svgwidthline position-absolute opacity-10 bottom-0 start-0" />
    </section>
  );
};

export default ProductDetail;
