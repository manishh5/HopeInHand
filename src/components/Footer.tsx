
const Footer = () => {
  const handlePhoneClick = () => {
    window.open('tel:+13235550192', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:serena@blakepsychology.com', '_self');
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026', '_blank');
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-light mb-6">Hope In Hand</h3>
            <p className="text-gray-300 mb-6 font-light leading-relaxed text-sm">
             Hope in Hand is a child-focused NGO dedicated to empowering underprivileged children through education, care, and community support. We believe every child deserves a fair chance to dream, grow, and succeed.
            </p>
            
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-6">Contact Information</h4>
            <div className="space-y-3 text-gray-300 font-light text-sm">
              <p 
                className="cursor-pointer hover:text-white transition-colors" 
                onClick={handlePhoneClick}
              >
                Phone: (+91) 9922 132460
              </p>
              <p 
                className="cursor-pointer hover:text-white transition-colors" 
                onClick={handleEmailClick}
              >
                Email: hopeinhand@ngo.com
              </p>
              <p 
                className="cursor-pointer hover:text-white transition-colors" 
                onClick={handleLocationClick}
              >
                Lonavala, Mumbai
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-6">Office Hours</h4>
            <div className="space-y-4 text-gray-300 font-light text-sm">
              <div>
                <p className="text-gray-200 font-medium mb-1">In-Person Sessions</p>
                <p>Monday To Saturday: 10:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-xs font-light">
            © 2024 Hope in Hand Foundation. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 font-light">
            This website provides general information about our child welfare initiatives and is not intended as a substitute for professional medical, legal, or psychological advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
