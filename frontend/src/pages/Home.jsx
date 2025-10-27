import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building2, Hammer, Gem, ClipboardList } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'Interior Fit-Out',
      description: 'Complete interior construction and fit-out services for commercial spaces.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTYwMjM1M3ww&ixlib=rb-4.1.0&q=85',
    },
    {
      icon: Hammer,
      title: 'Design-Build',
      description: 'Integrated design and construction services for streamlined project delivery.',
      image: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTYwMjM1M3ww&ixlib=rb-4.1.0&q=85',
    },
    {
      icon: Gem,
      title: 'Marble & Stone',
      description: 'Precision marble and stone craftsmanship for luxury commercial projects.',
      image: 'https://images.unsplash.com/photo-1701541985163-0d0d49011bd2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzYxNjAyMzYxfDA&ixlib=rb-4.1.0&q=85',
    },
    {
      icon: ClipboardList,
      title: 'Project Management',
      description: 'End-to-end project management ensuring on-time, on-budget delivery.',
      image: 'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2023/05/11/161611-825901894_large.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <img
            src="https://customer-assets.emergentagent.com/job_build-marble/artifacts/fr2rv7oy_Color%20logo%20-%20no%20background.png"
            alt="Oracle Project Group"
            className="h-24 w-auto mx-auto mb-8 fade-up"
            style={{ animationDelay: '0.2s' }}
          />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 fade-up" style={{ animationDelay: '0.4s' }}>
            Precision Interiors. Construction Without Compromise.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 fade-up" style={{ animationDelay: '0.6s' }}>
            Oracle Project Group delivers turnkey construction, fit-outs, and specialty marble craftsmanship across the GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0074D9] text-white rounded-md hover:bg-[#0062b8] transition-all btn-transition font-semibold text-lg inline-flex items-center justify-center"
            >
              Request a Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-[#0F1115] transition-all btn-transition font-semibold text-lg"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1115] mb-4">
              Commercial Construction Excellence
            </h2>
            <div className="w-24 h-1 bg-[#C6A45B] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Oracle Project Group is the leader in the commercial interior office construction industry. We specialize in delivering high-quality construction projects with precision and expertise.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#0074D9] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">Over 20 years of construction excellence</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#0074D9] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">Licensed and insured professionals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#0074D9] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">Commitment to quality and safety</p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-[#0074D9] font-semibold hover:text-[#0062b8] transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85"
                alt="Oracle Project Group Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F6F6F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1115] mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#C6A45B] mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Leveraging our expertise, we take a unique collaborative approach for a seamless project flow, from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="text-[#C6A45B]" size={32} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F1115] mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-[#0074D9] font-semibold hover:text-[#0062b8] transition-colors text-sm"
                    >
                      Learn More
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-[#0074D9] text-white rounded-md hover:bg-[#0062b8] transition-all btn-transition font-semibold"
            >
              See All Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Projects CTA Section */}
      <section className="py-20 bg-[#0F1115] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our completed projects showcasing precision, quality, and excellence in commercial construction.
          </p>
          <Link
            to="/projects"
            className="inline-block px-8 py-4 bg-[#C6A45B] text-white rounded-md hover:bg-[#b08f45] transition-all btn-transition font-semibold text-lg"
          >
            See All Our Projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;