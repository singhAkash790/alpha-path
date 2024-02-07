import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import React from "react";

const page = () => {
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="title col-12 float-start text-center">
                    <h2>Refund and Cancellation Policy</h2>
                  </div>
                  <div className="privacy_pol_cnt">
                    <div class="contentbox">
                      <h3>Home Collection Policy</h3>
                      <p>
                        If the total value of all the tests/packages in the cart
                        is equal to or more than Rs. 500/-, then there will be
                        no home collection charges levied. This offer is valid
                        only for orders placed through Website/Mobile App of
                        Assure Pathlabs.
                      </p>
                    </div>
                    <div class="contentbox">
                      <h3>Order Cancellation Policy Cancellation Charges</h3>
                      <p>
                        Any time after the transaction and before the
                        phlebotomist’s visit to the patient's home – 0
                        Cancellation Charges. Phlebotomist visits the patient
                        premises but the booking is cancelled. Sample is not
                        collected – Rs. 100 After the sample is taken / picked
                        up there will be no refund.
                      </p>

                      <ul>
                        <li>
                          In case a request for refund reaches the laboratory,
                          amount paid will be credited into patient account/card
                          for within a maximum of 4 - 7 (Business days) days
                          from date of cancellation.
                        </li>
                        <li>
                          No refund will be given after 45 days from the date of
                          preferred slot have been booked by patient
                        </li>
                        <li>
                          Cancellations received after the stated deadline will
                          not be eligible for a refund.
                        </li>
                        <li>
                          Refund requests must include the name of the attendee
                          and transaction number.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10 top-20 end-0" />
        </section>
      </main>
    </>
  );
};

export default page;
