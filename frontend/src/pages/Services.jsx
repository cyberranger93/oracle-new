import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Hammer, Gem, ClipboardList, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'Interior Fit-Out',
      description: 'Transform your commercial space with our comprehensive interior fit-out services. We handle everything from demolition to final finishes.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTYwMjM1M3ww&ixlib=rb-4.1.0&q=85',
      features: [
        'Complete office renovations',
        'Partition walls and ceilings',
        'Electrical and lighting systems',
        'HVAC integration',
        'Flooring and finishes',
      ],
    },
    {
      icon: Hammer,
      title: 'Design-Build',
      description: 'Streamline your project with our integrated design-build approach, combining architectural design and construction under one roof.',
      image: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTYwMjM1M3ww&ixlib=rb-4.1.0&q=85',
      features: [
        'Conceptual design development',
        ' 3D visualization and rendering',
        'Value engineering',
        'Seamless construction execution',
        'Single point of contact',
      ],
    },
    {
      icon: Gem,
      title: 'Marble & Stone',
      description: 'Elevate your space with our expert marble and stone craftsmanship. We specialize in custom installations for luxury commercial projects.',
      image: 'https://images.unsplash.com/photo-1701541985163-0d0d49011bd2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzYxNjAyMzYxfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Custom marble fabrication',
        'Stone countertops and surfaces',
        'Feature walls and cladding',
        'Precision cutting and installation',
        'Restoration and repair',
      ],
    },
    {
      icon: ClipboardList,
      title: 'Project Management',
      description: 'Ensure your construction project stays on track with our comprehensive project management services from planning to completion.',
      image: 'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Project planning and scheduling',
        'Budget management',
        'Quality control and inspections',
        'Subcontractor coordination',
        'Risk management',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Leveraging our expertise, we take a unique collaborative approach for a seamless project flow, from start to finish.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={isEven ? 'order-1' : 'order-2'}>
                    <div className="w-16 h-16 bg-[#0074D9] rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h2 className="text-4xl font-bold text-[#0F1115] mb-4">{service.title}</h2>
                    <div className="w-24 h-1 bg-[#C6A45B] mb-6"></div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="text-[#0074D9] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-[#0074D9] text-white rounded-md hover:bg-[#0062b8] transition-all btn-transition font-semibold"
                    >
                      Get a Quote
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                  <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${isEven ? 'order-2' : 'order-1'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1115] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and receive a comprehensive quote.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#C6A45B] text-white rounded-md hover:bg-[#b08f45] transition-all btn-transition font-semibold text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;