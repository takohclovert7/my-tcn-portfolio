
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
        console.error("EmailJS error:", error);

        setStatus("error");
        setLoading(false);

        setTimeout(() => {
          setStatus("");
        }, 5000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Have something in <span>mind?</span>
          </h2>

          <p>
            Whether it's a project, a collaboration, or an opportunity,
            I'm always happy to have a conversation. Tell me what you're
            thinking.
          </p>
        </div>

        <div className="contact-grid">
          {/* CONTACT FORM */}

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <div>
                <span className="contact-small-label">DROP ME A MESSAGE</span>
                <h3>Let's start a conversation.</h3>
              </div>

              <div className="contact-heading-icon" aria-hidden="true">
                ↗
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className="contact-input-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  rows="6"
                  name="message"
                  placeholder="Tell me a little about your project or opportunity..."
                  required
                />
              </div>

              <button
                className="contact-submit"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending message..." : "Send message"}

                {!loading && <span aria-hidden="true">↗</span>}
              </button>

              {status === "success" && (
                <div className="success-message" role="status">
                  <span>✓</span>
                  Message sent successfully. I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="error-message" role="alert">
                  <span>!</span>
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* CONTACT INFORMATION */}

          <aside className="contact-info">
            <div className="contact-info-intro">
              <span className="contact-small-label">CONTACT DETAILS</span>
              <h3>Other ways to reach me.</h3>
              <p>
                Prefer a direct conversation? You can reach me through any
                of the channels below.
              </p>
            </div>

            <a
              href="mailto:takohclovert7@gmail.com"
              className="contact-info-item"
            >
              <span className="contact-info-icon" aria-hidden="true">
                @
              </span>

              <span className="contact-info-text">
                <small>EMAIL ME</small>
                <strong>takohclovert7@gmail.com</strong>
              </span>

              <span className="contact-info-arrow">↗</span>
            </a>

            <a
              href="tel:+237679994243"
              className="contact-info-item"
            >
              <span className="contact-info-icon" aria-hidden="true">
                ☎
              </span>

              <span className="contact-info-text">
                <small>CALL ME</small>
                <strong>+237 679 994 243</strong>
              </span>

              <span className="contact-info-arrow">↗</span>
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon" aria-hidden="true">
                ⌖
              </span>

              <span className="contact-info-text">
                <small>LOCATION</small>
                <strong>Molyko, Buea, Cameroon</strong>
              </span>
            </div>

            <div className="contact-availability">
              <span className="availability-indicator" />

              <div>
                <strong>Open to opportunities</strong>
                <p>Freelance projects and full-time roles.</p>
              </div>
            </div>

            <div className="contact-social">
              <span className="contact-small-label">FIND ME ONLINE</span>

              <div className="social-links">
                <a
                  href="https://github.com/takohclovert7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span>↗</span>
                </a>

                <a
                  href="https://wa.me/237679994243"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp <span>↗</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
