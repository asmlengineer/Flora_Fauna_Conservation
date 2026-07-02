import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
import { useState } from 'react';

function Contact(){
     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Send Successfully');
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e96cdef2-2163-4f55-9ece-85430466ba44");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

    return(        
        <>
        <div id='contact'>
            <section class="hero">

            <div class="hero-content">

            <h2>Let's Protect Nature Together</h2>

            <p>
            Have questions, suggestions, or want to participate in conservation
            activities? Reach out to us and become a part of our mission to
            protect biodiversity.
            </p>

            </div>

            </section>

            <section class="contact-section">

            <h2 class="section-title">Get In Touch</h2>

            <div class="contact-container">

            <div class="contact-info">
            <h2>Contact Information</h2>
            <div class="info-box">
            <h3>📍 Address</h3>
            <p>Ashok Colony<br/>Police Station Road,<br/>Puranpur <br /> Uttar Pradesh India</p>
            </div>

            <div class="info-box">
            <h3>📧 Email</h3>
            <p>ashish25120222gautam@gmail.com</p>
            </div>

            <div class="info-box">
            <h3>📞 Phone</h3>
            <p>+91 96275 09661 </p>
            </div>

            <div class="info-box">
            <h3>🕒 Working Hours</h3>
            <p>All Day<br/></p>
            </div>
            </div>


            <div class="contact-form">

            <h2>Send Us a Message</h2>

            <form onSubmit={onSubmit}> 

            <input type="text" placeholder="Full Name" name='fullname'required/>

            <input type="email" placeholder="Email Address" name='email'required/>

            <input type="tel" placeholder="Phone Number" name='phone'/>

            <input type="text" placeholder="Subject" name='subject'/>

            <textarea placeholder="Write Your Message..."  name='textarea'required></textarea>

            <button type="submit" onSubmit={console.log('Form Submitted Successfully')}>Send Message</button>

            </form>

            </div>

            </div>

            </section>

            <section class="faq">

            <h2 class="section-title">Frequently Asked Questions</h2>

            <div class="faq-grid">

            <div class="faq-box">
            <h3>🌱 How can I volunteer?</h3>
            <p>You can register through our volunteer programs and participate in tree plantation and awareness campaigns.</p>
            </div>

            <div class="faq-box">
            <h3>🦁 Do you organize wildlife events?</h3>
            <p>Yes, we organize educational workshops, wildlife awareness drives, and nature conservation programs.</p>
            </div>

            <div class="faq-box">
            <h3>🌍 Can I donate?</h3>
            <p>Yes. Donations help us support conservation projects, environmental education, and habitat restoration.</p>
            </div>

            </div>

            </section>
           </div>
        </>
    );
}
export default Contact;