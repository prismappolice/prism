import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS credentials
    const SERVICE_ID = 'service_zfbay1w';
    const TEMPLATE_ID = 'template_nlyquhe';
    const USER_ID = 'etJhoQd2A5Wss87CF';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        alert('Your message has been sent!');
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <Layout>

      {/* Contact Title and Subtitle (from PageHero) */}
      <section className="pt-10 pb-2 bg-background">
        <div className="w-full max-w-full mx-auto px-2 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-4" style={{ color: '#222', letterSpacing: '-1px' }}>
            Contact Us
          </h1>
          <p className="text-lg md:text-xl font-body max-w-6xl mx-auto text-black" style={{ color: '#222' }}>
            Get in touch with PRISM — We welcome inquiries, collaborations, and partnerships.
          </p>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="w-full max-w-full mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto w-full border border-black/30 rounded-lg p-8 bg-card items-stretch h-full">
            {/* Contact Info */}
            <div className="h-full flex flex-col">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">Reach Out to Us</h2>
              <div className="space-y-6 rounded-lg p-6 bg-card border border-black/20">
                {[
                  { icon: <MapPin className="w-5 h-5 text-secondary" />, label: "Address", value: "PRISM, APPolice Headquarters, Mangalagiri, Guntur District,\nAndhra Pradesh - 522503" },
                  { icon: <Phone className="w-5 h-5 text-secondary" />, label: "Phone", value: "+91-8523-817999" },
                  { icon: <Mail className="w-5 h-5 text-secondary" />, label: "Email", value: "prismappolice@gmail.com" },
                  { icon: <Clock className="w-5 h-5 text-secondary" />, label: "Working Hours", value: "Monday – Friday: 10:00 AM – 07:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground text-sm">{item.label}</h3>
                      <p className="text-sm text-muted-foreground font-body whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}


              {/* Map placeholder */}
              <div className="mt-8 rounded-lg overflow-hidden border h-48 bg-muted flex items-center justify-center">
                <a
                  href="https://www.google.com/maps/place/AP+DGP+Office+Andhra+Pradesh/@16.446491,80.583009,15z/data=!4m12!1m5!3m4!2zMTbCsDI2JzQ3LjQiTiA4MMKwMzQnNTguOCJF!8m2!3d16.4464914!4d80.5830088!3m5!1s0x3a35f0e6aa76f389:0x9fdcbb510d78165!8m2!3d16.4464711!4d80.5933086!16s%2Fg%2F11g8wnqnr4?hl=en-US&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-end justify-end  text-sm font-medium text-secondary hover:text-secondary-foreground transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  <iframe
                    title="AP DGP Office Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d80.583009!3d16.446491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0e6aa76f389:0x9fdcbb510d78165!2sAP%20DGP%20Office%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4vXXXXXXXXXXXX!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    style={{ zIndex: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
             </div>

            {/* Contact Form */}
            <div className="h-full flex flex-col">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 border border-black/20 rounded-lg p-6 bg-card">
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { name: "subject", label: "Subject", type: "text", placeholder: "Subject of your message" },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={e => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                      required
                      className="w-full px-3 py-2.5 rounded-md border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
                  />
                   </div>
                   
               <div className="flex justify-center mt-4">
               <button
               type="submit"
               className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-5 rounded-md font-body font-semibold text-sm hover:bg-gold-dark transition-colors shadow-gold"
                >
               <Send className="w-4 h-4" /> Send Message
               </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
