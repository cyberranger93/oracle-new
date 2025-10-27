import React, { useEffect } from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters. We deliver exceptional craftsmanship with meticulous attention to quality.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients, architects, and designers to bring visions to life.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Industry-leading standards and commitment to delivering superior construction services.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing modern techniques and technologies for efficient project execution.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTYwMjM1M3ww&ixlib=rb-4.1.0&q=85)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-200">Building Excellence Since 2004</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0F1115] mb-6">
                Oracle Project Group
              </h2>
              <div className="w-24 h-1 bg-[#C6A45B] mb-6"></div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Oracle Project Group is the leader in the commercial interior office construction industry. With over two decades of experience, we've established ourselves as the go-to partner for businesses seeking exceptional construction services.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our expertise spans interior fit-outs, design-build projects, marble and stone craftsmanship, and comprehensive project management. We pride ourselves on our ability to transform spaces into functional, beautiful environments that exceed our clients' expectations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Based in the Greater Toronto Area, we serve clients across Ontario with a commitment to quality, safety, and innovation in every project we undertake.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85"
                alt="Oracle Project Group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0074D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F6F6F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1115] mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#C6A45B] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-[#0074D9] rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F1115] mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1115] mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-[#C6A45B] mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our experienced team of construction professionals, designers, and project managers work together to deliver exceptional results.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg"
              alt="Oracle Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;