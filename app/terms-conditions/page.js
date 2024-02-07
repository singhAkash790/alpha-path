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
                    <h2>TERMS AND CONDITIONS</h2>
                  </div>
                  <div className="privacy_pol_cnt">
                    <p>
                      We at www.assurepathlabs.com allow our customers to book
                      health check-up packages online. In order to avail this
                      facility, the customers simply need to register themselves
                      on www.assurepathlabs.com
                    </p>
                    <div class="contentbox">
                      <h3>General</h3>
                      <p>
                        The health packages booked online are non-transferable.
                        This means that the person on whose name the package has
                        been registered holds all the rights and eligibility to
                        avail the services mentioned at the lab or by home
                        collection.
                      </p>
                      <p>
                        The customers are required to show the invoice or a copy
                        of invoice generated online or received by email at the
                        time of sample collection.
                      </p>
                      <p>
                        We request you to go through these terms and conditions
                        thoroughly before you finally use our online payment
                        facility for your health check-up packages. All
                        transactions and payments made online are subject as per
                        your acceptance of these terms and conditions mentioned
                        herewith. Availing of online payment facility on
                        www.assurepathlabs.com means that you abide by the terms
                        and conditions mentioned here.
                      </p>
                    </div>

                    <div class="contentbox">
                      <h3>Internet Banking</h3>
                      <p>
                        You can make payments through the banks that we admit
                        and you have an account with using the net banking
                        options offered by the respective bank and the amount
                        will be automatically debited from your bank account.
                        www.assurepathlabs.com enables safe and secured
                        transaction using online gateway system for payment
                        processing.
                      </p>
                      <p>
                        Since these transactions are processed by the external
                        banking sites, there may be a delay of 1-3 businbess
                        days to update your payment in records of
                        www.assurepathlabs.com.
                      </p>
                      <p>
                        Confirmation: No action can be taken on the basis of
                        information on the website unless you have received the
                        confirmation of your transaction. In case, you do not
                        receive any email confirmation regarding your
                        transaction within the said time period, make sure you
                        check your ‘Spam’ or ‘Junk’ folder making it sure that
                        it is not misdirected and if still not received, kindly
                        contact our customer care.
                      </p>
                    </div>
                    <div class="contentbox">
                      <h3>Online Card Payments</h3>
                      <p>
                        Payments made using visa or master card can be processed
                        using a gateway system for online payment. The
                        transaction is directly authorized by the respective
                        bank in order to make the transaction safe without
                        passing any information to www.assurepathlabs.com. The
                        authorisation code (OTP) as well as the confirmation of
                        the entire transaction will be issued by the bank using
                        the online payment gateway within a few minutes
                        depending on the internet connection.
                        www.assurepathlabs.com can neither access nor save any
                        of your credit card details.
                      </p>
                      <p>
                        <strong>
                          Terms and conditions on{" "}
                          <a href="www.assurepathlabs.com">
                            www.assurepathlabs.com.
                          </a>
                        </strong>
                        Online credit card payments are subject to change at any
                        point of time. Each transaction will thereby cause to
                        undergo the specific terms and conditions mentioned at
                        the time of transaction.
                      </p>
                    </div>
                    <div class="contentbox">
                      <h3>Terms of Use</h3>
                      <p>
                        You abide by the Terms and Conditions mentioned herewith
                        by accessing and using the services on this website. At
                        the same time you agree to all the applicable laws and
                        regulations and consequently agree to abide by them as
                        well. In case, you do not agree with any of these terms,
                        you are prohibited from the use of any service given on
                        this website. All the materials contained on this
                        website are protected and pertain to the copyright as
                        well as trademark law if any.
                      </p>
                    </div>
                  </div>
                  <div class="contentbox">
                    <h3>Terms of Modifications on Site</h3>
                    <p>
                      Assure Pathlabs is free to revise or edit any of its terms
                      of use or ‘terms and conditions’ as per its convenience
                      without any prior notice on the website
                      www.assurepathlabs.com. You agree to abide by the current
                      version of Terms and Conditions given on the website.
                    </p>
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
