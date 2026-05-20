import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent mb-6 relative z-10">
            About FarmConnect
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed relative z-10">
            Bridging the gap between farmers and consumers, creating a sustainable ecosystem for fresh, local produce while empowering agricultural communities.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To revolutionize the agricultural supply chain by providing a direct, transparent, and fair marketplace. We aim to eliminate unnecessary middlemen, ensuring farmers get better returns for their hard work while consumers get fresher produce at reasonable prices.
            </p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-teal-500/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              A future where every local community is deeply connected to its food sources. We envision a sustainable agricultural ecosystem that promotes fair trade, reduces food waste, and fosters a profound appreciation for those who cultivate our land.
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30 hover:bg-gray-800/50 transition-colors">
              <div className="text-emerald-400 text-3xl mb-4">🌱</div>
              <h4 className="text-xl font-bold text-gray-200 mb-2">Freshness Guaranteed</h4>
              <p className="text-gray-400 text-sm">Directly from the farm to your table, minimizing transit time and maximizing quality.</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30 hover:bg-gray-800/50 transition-colors">
              <div className="text-emerald-400 text-3xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-gray-200 mb-2">Fair Trade</h4>
              <p className="text-gray-400 text-sm">Empowering farmers with transparent pricing and better margins for their harvest.</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30 hover:bg-gray-800/50 transition-colors">
              <div className="text-emerald-400 text-3xl mb-4">🌍</div>
              <h4 className="text-xl font-bold text-gray-200 mb-2">Eco-Friendly</h4>
              <p className="text-gray-400 text-sm">Reducing carbon footprint by promoting local consumption and sustainable farming.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-3xl border border-emerald-500/20 p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Join Our Community</h2>
          <p className="text-emerald-100/80 mb-8 max-w-2xl mx-auto relative z-10">
            Whether you're a farmer looking to expand your reach or a consumer seeking the freshest local produce, there's a place for you here.
          </p>
          <div className="flex justify-center gap-4 relative z-10">
            <Link to="/register" className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 transition-all">
              Get Started
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-gray-800 text-gray-300 rounded-xl font-medium border border-gray-700 hover:bg-gray-700 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
