import React from "react";

function Contact() {
  return (
    <section className="m-4">
      <div className="bg-white p-4 rounded-lg">
        <div className="">
          <h2 className="font-bold text-lg text-center about-us-section-title">
            Contact Us
          </h2>
          <div className="flex">
            <p>
              <b>Address: </b>
              <br />
              AeroBooker Headquarters 123 Skyway Avenue Aviation City,
              <br />
              Flyland
              <br />
              12345
            </p>
            <br />
            <p>
              <b>Phone: </b>
              Customer Support: +1-800-AERO-123 Sales Inquiries: +1-555-FLY-HIGH
            </p>
            <br />
            <p>
              <b>Email: </b>
              Customer Support: support@aerobooker.com Sales Inquiries:
              sales@aerobooker.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
