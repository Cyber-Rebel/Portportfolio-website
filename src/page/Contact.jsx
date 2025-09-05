import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[font1]">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always excited to work on 
            innovative solutions and bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#A9927D] rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="font-medium">nilesh.patil@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#A9927D] rounded-full flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="font-medium">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#A9927D] rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="font-medium">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#A9927D] transition-colors">
                  💼
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#A9927D] transition-colors">
                  🐙
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#A9927D] transition-colors">
                  🐦
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#A9927D] transition-colors">
                  📸
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-emerald-400 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-emerald-400 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-emerald-400 focus:outline-none"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-emerald-400 focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
