import React from "react";
import email from "../../Images/email.png";
import call from "../../Images/phon.png";
import location from "../../Images/marker.png";

const Contact = () => {
  return (
    <div className="contact" id="contact-id">
      <h2>Contact Me</h2>
      <hr className="contact-hr" />

      <div className="contact-flex">
        <div className="contact-flex-1">
          <div>
            <h3>Let's connect</h3>
            <p className="contact-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              praesentium.adipisicing elit. Magni, praesentium. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magni,
              praesentium.adipisicing elit. Magni, praesentium. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magni,
              praesentium.adipisicing elit. Magni, praesentium.
            </p>
          </div>

          <div className="info-flex">
            <div>
              <p>
                <span>
                  <img src={email} alt="" />
                </span>{" "}
                vishal32gaykwad@gmail.com
              </p>
            </div>

            <div>
              <p>
                <span>
                  <img src={call} alt="" />
                </span>{" "}
                +91 9960692308
              </p>
            </div>

            <div>
              <p>
                {" "}
                <span>
                  <img src={location} alt="" />
                </span>{" "}
                  Wardha, Maharashtra
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send me a message</h3>
          <form action="https://formsubmit.co/vishal32gaykwad@gmail.com" method="POST">
            <label htmlFor="fname">Full Name<span>*</span></label>
            <br />
            <input type="text" id="pnum" name="Name" className="inpStyle" required/>
            <br /> <br />
            <label htmlFor="pnum">Phone Number<span>*</span></label>
            <br />
            <input type="text" placeholder="" id="fname" name="Phone" className="inpStyle" />
            <br /> <br />
            <label htmlFor="email">Email<span>*</span></label>
            <br />
            <input type="email" id="email" name="Email" className="inpStyle"/> <br />
            <br />
            <label htmlFor="textArea">Message<span>*</span></label> <br />
            <textarea
              name="Message"
              id="textArea"
              cols="50"
              rows="5"
              placeholder="your message here"
            ></textarea>{" "}
            <br />
            <br />
            <input
              className="btn btn-warning text-white"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
