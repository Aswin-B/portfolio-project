import React from 'react'
import './Contact.css'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c1337233-fbd5-4714-8736-865aab6b9a08");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Feel free to reach out. I am always open to discuss about new opportunites and projects to work. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <i className="fa fa-envelope"></i>
                        <p>aswinbalamurugan0401@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <i className="fa fa-phone-square"></i>
                        <p>6379760475</p>
                    </div>
                    <div className="contact-detail">
                        <i className='fas fa-map-marker-alt'></i>
                        <p>Cuddalore, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder='Enter Your Name' />
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder='Enter Your Email' />
                <label htmlFor="">Write your Message here</label>
                <textarea name="message" rows="6" placeholder='Enter your Message'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact