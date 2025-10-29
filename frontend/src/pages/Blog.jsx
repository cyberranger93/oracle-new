import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API}/blog`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581783458534-001a466b5487?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">News & Insights</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest trends, projects, and insights from Oracle Project Group.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37]"></div>
              <p className="mt-4 text-gray-600">Loading posts...</p>
            </div>
          ) : (
            <div className="space-y-12">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-[#C6A45B]" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-[#C6A45B]" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-[#0F1115] mb-4">{post.title}</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
                    <button className="inline-flex items-center text-[#D4AF37] font-semibold hover:text-[#C19A2B] transition-colors">
                      Read More
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;