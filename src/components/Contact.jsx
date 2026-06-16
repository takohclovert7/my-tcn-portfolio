import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./../styles/contact.css";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_0ofkt0k",
        "template_llc6mjc",
        form.current,
        "Jgg0GoPib73jpkVER"
      )
      .then(() => {
        setStatus("success");
        setLoading(false);

        form.current.reset();

        setTimeout(() => {
          setStatus("");
        }, 5000);
      })
      .catch((error) => {
        console.log(error);

        setStatus("error");
        setLoading(false);

        setTimeout(() => {
          setStatus("");
        }, 5000);
      });
  };

  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="container">

        <div className="contact-header">

          <span>CONTACT</span>

          <h2>
            Let's Work Together
          </h2>

          <p>
            Have a project in mind or want to
            discuss an opportunity? I'd love
            to hear from you.
          </p>

        </div>

        <div className="contact-grid">

          {/* LEFT SIDE */}

          <div className="glass contact-form-card">

            <h3>
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
            >

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {status === "success" && (
                <div className="success-message">
                  ✓ Message sent successfully.
                  I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="error-message">
                  ✕ Something went wrong.
                  Please try again.
                </div>
              )}

            </form>

          </div>

          {/* RIGHT SIDE */}

          <div className="contact-info">

            <div className="glass info-box">

              <h4>Email</h4>

              <p>
                <a href="mailto: takohclovert7@gmail.com">
                 takohclovert7@gmail.com
                </a>
              </p>

            </div>

            <div className="glass info-box">

              <h4>Phone</h4>

              <p>
                <a href="tel:+237679994243">
                  +237 679 994 243
                </a>
              </p>

            </div>

            <div className="glass info-box">

              <h4>Location</h4>

              <p>
               Molyko, Buea, Cameroon
              </p>

            </div>

            <div className="glass info-box">

              <h4>Availability</h4>

              <p>
                Open for Freelance & Full-Time Opportunities
              </p>

            </div>

            <div className="glass social-box">

              <h4>
                Connect With Me
              </h4>

              <div className="social-links">

                <a
                  href="https://github.com/takohclovert7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://wa.me/237679994243"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;