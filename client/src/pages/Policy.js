import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <ul class="list-group">
            <li class="list-group-item">
              Welcome to Guitar Emporium, outlining our commitment to
              safeguarding your privacy.{" "}
            </li>

            <li class="list-group-item">
              We collect personal details like name, contact information, and
              payment details, as well as non-personal information like IP
              addresses and browsing data.
            </li>

            <li class="list-group-item">
              Personal information is used for order processing, customer
              support, and website improvement.
            </li>

            <li class="list-group-item">
              Information may be shared with third-party service providers for
              order processing, shipping, and payment transactions.
            </li>

            <li class="list-group-item">
              Industry-standard security measures are in place to protect your
              personal information.
            </li>

            <li class="list-group-item">
              You can access, correct, or delete personal information, opt-out
              of marketing communications, and manage cookie preferences.
            </li>

            <li class="list-group-item">
              The Privacy Policy may be updated to reflect changes in our
              practices; check periodically for updates.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
