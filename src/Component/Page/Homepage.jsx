import React from 'react'
import { Mail, MessageCircle, Instagram, Facebook, Twitter, Linkedin, Youtube, Sparkles, Clock, DollarSign, Zap, Shield } from 'lucide-react'

const Home = () => {
  const whatsappNumber = "7877829435"
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in Dobhi laundry services. Please provide more information.")
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`

  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com/dobhi", label: "Instagram" },
    { icon: Facebook, url: "https://facebook.com/dobhi", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com/dobhi", label: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com/company/dobhi", label: "LinkedIn" },
    { icon: Youtube, url: "https://youtube.com/@dobhi", label: "YouTube" },
  ]

  const features = [
    { icon: Clock, title: "Lightning Fast", desc: "Same-day delivery in 6-12 hours" },
    { icon: DollarSign, title: "Best Value", desc: "Premium quality at affordable prices" },
    { icon: Sparkles, title: "Professional Care", desc: "Modern machines, expert handling" },
    { icon: Zap, title: "Doorstep Service", desc: "Pickup and delivery at your home" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden flex items-center justify-center py-4 md:py-8 lg:py-12" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-3 sm:px-4 md:px-6 w-full max-w-5xl">
        {/* Main Message Section */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-4 sm:p-5 md:p-8 lg:p-12 mb-6 md:mb-10 animate-slide-up border border-white/50">
          <div className="text-center mb-5 md:mb-8">
            <div className="inline-block px-3 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-[10px] sm:text-xs md:text-sm font-medium mb-4 md:mb-6 animate-pulse shadow-lg">
              🔧 Under Maintenance - Launching Soon!
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800 mb-3 md:mb-5 leading-tight" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              Your Laundry,<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Delivered Fresh</span>
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-light mb-2 md:mb-3 px-2" style={{ fontWeight: 300 }}>
              We're building something extraordinary. A laundry service that saves your time, delivers exceptional quality, and brings convenience right to your doorstep.
            </p>
            
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto font-light px-2" style={{ fontWeight: 300 }}>
              Professional washing, lightning-fast delivery, and unbeatable value. Your clothes deserve the best care, and that's exactly what we're creating for you.
            </p>
          </div>

          {/* Features Grid - 4 Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 mt-6 md:mt-10">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="p-2.5 sm:p-3 md:p-4 lg:p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg md:rounded-xl border border-blue-100 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group text-center"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="p-2 sm:p-2.5 md:p-3 bg-white rounded-full mb-2 md:mb-3 group-hover:bg-blue-100 transition-colors duration-300 shadow-sm">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-600 group-hover:text-blue-700" />
                    </div>
                    <h3 className="font-medium text-gray-800 mb-1 md:mb-1.5 text-[10px] sm:text-xs md:text-sm lg:text-base" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      {feature.title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-600 font-light leading-relaxed px-1" style={{ fontWeight: 300 }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-5 md:mt-8 p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-xl md:rounded-2xl text-white text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium mb-2 md:mb-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              ⚡ Fast. Affordable. Premium.
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base opacity-95 font-light max-w-2xl mx-auto px-2" style={{ fontWeight: 300 }}>
              Experience the perfect blend of speed, quality, and value. We're revolutionizing laundry service, one load at a time.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-4 sm:p-5 md:p-8 lg:p-12 mb-6 md:mb-8 animate-slide-up-delay border border-white/50">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-2 md:mb-3 text-center" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
            Have Questions?
          </h3>
          <p className="text-gray-600 mb-5 md:mb-8 text-center font-light text-[11px] sm:text-xs md:text-sm lg:text-base max-w-2xl mx-auto px-2" style={{ fontWeight: 300 }}>
            We're here to help. Reach out via email or WhatsApp for any inquiries, pricing information, or to learn more about our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-5 md:mb-6">
            {/* Email Button */}
            <a
              href={`mailto:support@dobhi.in?subject=Inquiry about Dobhi Laundry Services`}
              className="group flex items-center gap-2 md:gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg md:rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center text-xs sm:text-sm md:text-base animate-button-hover"
              style={{ fontWeight: 500 }}
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
              <span>support@dobhi.in</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 md:gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg md:rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center text-xs sm:text-sm md:text-base animate-button-hover"
              style={{ fontWeight: 500 }}
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 md:gap-4 flex-wrap mt-5 md:mt-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 sm:p-3 md:p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full hover:from-blue-100 hover:to-cyan-100 transform hover:scale-110 transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-blue-700" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm lg:text-base text-center animate-fade-in-delay-6 font-light px-2" style={{ fontWeight: 300 }}>
          We'll be back soon! Thank you for your patience. 🙏
        </p>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s both;
        }
        .animate-fade-in-delay-5 {
          animation: fade-in 0.8s ease-out 1s both;
        }
        .animate-fade-in-delay-6 {
          animation: fade-in 0.8s ease-out 1.2s both;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.3s both;
        }
        @keyframes button-hover {
          0%, 100% {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          }
          50% {
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18);
          }
        }
        .animate-button-hover {
          animation: button-hover 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Home
