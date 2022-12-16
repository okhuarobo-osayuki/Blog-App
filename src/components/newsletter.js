import React from "react";
import "../assets/css/footer.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2 className="newsletter-header">Subscribe to our newsletter.</h2>
      <p className="newsletter-para">Subscribe to get all the latest updates</p>
      <form action="">
        <input type="text" placeholder="Enter your name" required />
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;
