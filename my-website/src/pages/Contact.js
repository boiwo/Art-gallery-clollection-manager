
// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="contact-page">
//       <h1>Contact Us</h1>
//       <div className="contact-info">
//         <p>Email: contact@example.com</p>
//         <p>Phone: +123 456 7890</p>
//         <p>Address: 123 Main St, City, Country</p>
//       </div>
//       <form className="contact-form">
//         <input type="text" placeholder="Your Name" />
//         <input type="email" placeholder="Your Email" />
//         <textarea placeholder="Your Message"></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };
// src/components/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        <strong>Email:</strong> contact@example.com
      </p>
      <p>
        <strong>Phone:</strong> +123 456 7890
      </p>
      <p>
        <strong>Address:</strong> 123 Main St, City, Country
      </p>

      <form>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <p>&copy; 2024 My Website. All rights reserved.</p>
    </div>
  );
};

export default Contact;


// export default Contact;
