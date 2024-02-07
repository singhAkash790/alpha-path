import React from "react";

const page = () => {
  return (
    <>
      <section className="position-relative pt-md-4">
        <div className="container">
          <div className="row   "></div>
          <div id="notfound">
            <div class="notfound">
              <div class="notfound-404">
                <h1>404</h1>
              </div>
              <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
              <p>
                THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS
                NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.
              </p>
              <a aria-current="page" class="active" href="/">
                Back to Homepage
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
