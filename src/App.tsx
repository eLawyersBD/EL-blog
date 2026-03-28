import React, { useState } from 'react';
import { Search, Menu, ChevronDown, ArrowRight, Scale, BookOpen, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import CorporateRegistrationPost from './components/CorporateRegistrationPost';

const categories = [
  "All", "Tax & VAT", "Company Registration", "RJSC Return", "Legal Services", 
  "Accounting Services", "Business Support"
];

const latestPost = {
  id: 0,
  category: "Tax & VAT",
  title: "Company Tax Return Filing",
  excerpt: "This blog is for informational purposes only and does not constitute formal legal advice. Learn about the latest updates and requirements for company tax return filing in Bangladesh to ensure your business remains compliant.",
  author: "E-Lawyers Expert",
  authorAvatar: "https://picsum.photos/seed/elawyers1/100/100",
  date: "March 25, 2026",
  readTime: "5 min read",
  image: "https://picsum.photos/seed/tax-return/1200/800"
};

const editorsPicks = [
  {
    id: 1,
    category: "RJSC Return",
    title: "RJSC Return Submission",
    excerpt: "A comprehensive guide to RJSC return submission.",
    author: "E-Lawyers Expert",
    authorAvatar: "https://picsum.photos/seed/elawyers2/100/100",
    date: "March 24, 2026",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/rjsc/600/400"
  },
  {
    id: 2,
    category: "Tax & VAT",
    title: "Investment Rebate Limit: Tax Credit on Investments",
    excerpt: "Understand the investment rebate limits and tax credits.",
    author: "E-Lawyers Expert",
    authorAvatar: "https://picsum.photos/seed/elawyers3/100/100",
    date: "March 16, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/rebate/600/400"
  },
  {
    id: 3,
    category: "Tax & VAT",
    title: "VAT Revenue Drivers and 2026 LPG",
    excerpt: "An analysis of VAT revenue drivers and the 2026 LPG policy.",
    author: "E-Lawyers Expert",
    authorAvatar: "https://picsum.photos/seed/elawyers4/100/100",
    date: "March 16, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/vat/600/400"
  }
];

const recentPosts = [
  {
    id: 4,
    category: "Company Registration",
    title: "Company Formation & Business Support Services In Bangladesh",
    excerpt: "Step-by-step guide to company formation in Bangladesh.",
    author: "E-Lawyers Expert",
    authorAvatar: "https://picsum.photos/seed/elawyers1/100/100",
    date: "March 10, 2026",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/company/600/400"
  },
  {
    id: 5,
    category: "Legal Services",
    title: "Essential Legal Resources & Tools for Startups",
    excerpt: "A curated list of legal resources for new startups.",
    author: "E-Lawyers Expert",
    authorAvatar: "https://picsum.photos/seed/elawyers2/100/100",
    date: "March 5, 2026",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/startup/600/400"
  },
  {
    id: 6,
    category: "Accounting Services",
    title: "Understanding Payroll, TDS, and VAT Calculators",
    excerpt: "How to effectively use payroll and tax calculators.",
    author: "E-Lawyers Expert",
    authorAvatar: "https://picsum.photos/seed/elawyers3/100/100",
    date: "February 28, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/accounting/600/400"
  },
  {
    id: 7,
    category: "Tax & VAT",
    title: "Corporate Tax Planning Strategies for 2026",
    excerpt: "Optimize your corporate tax structure with these effective planning strategies.",
    author: "E-Lawyers Expert",
    authorAvatar: "https://picsum.photos/seed/elawyers4/100/100",
    date: "February 20, 2026",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/tax-planning/600/400"
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentView, setCurrentView] = useState<'home' | 'post'>('home');
  const [searchQuery, setSearchQuery] = useState("");

  const allPosts = [latestPost, ...editorsPicks, ...recentPosts];
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-legal-bg text-gray-800 font-sans">
      {/* Top Contact Bar */}
      <div className="bg-legal-navy text-white/80 text-sm py-2 hidden md:block">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> 01616-428429 / 01313-583838</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@elawyersbd.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-legal-gold transition-colors">Login/Register</a>
            <a href="#" className="hover:text-legal-gold transition-colors">Appointment</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-legal-navy flex items-center justify-center text-legal-gold">
                <Scale size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight text-legal-navy leading-none">
                  E-Lawyers
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mt-1">
                  Legal & Business Consultancy
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="cursor-pointer text-gray-700 hover:text-legal-gold font-medium transition-colors">
                About
              </div>
              <div className="group relative cursor-pointer flex items-center gap-1 text-gray-700 hover:text-legal-gold font-medium transition-colors">
                Services <ChevronDown size={16} className="text-gray-400 group-hover:text-legal-gold" />
              </div>
              <div className="cursor-pointer text-legal-gold font-medium transition-colors border-b-2 border-legal-gold py-1">
                Blog
              </div>
              <div className="cursor-pointer text-gray-700 hover:text-legal-gold font-medium transition-colors">
                Academy
              </div>
              <div className="cursor-pointer text-gray-700 hover:text-legal-gold font-medium transition-colors">
                Resources
              </div>
              <div className="cursor-pointer text-gray-700 hover:text-legal-gold font-medium transition-colors">
                Contact Us
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="bg-legal-gold hover:bg-legal-gold-hover text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-md">
                Meet Your Consultant
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button className="text-gray-600 hover:text-legal-gold">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {currentView === 'post' ? (
          <CorporateRegistrationPost onBack={() => setCurrentView('home')} />
        ) : (
          <>
            {/* Hero Section */}
            <section className="bg-legal-navy text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <Scale size={400} />
          </div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-legal-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
              Insights & Updates
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              E-Lawyers Legal & Business Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light">
              Stay informed with the latest legal insights, tax updates, and business consultancy advice from top professionals in Bangladesh.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto shadow-lg mb-12">
              <input 
                type="text" 
                placeholder="Search legal topics, case studies, or news..." 
                className="w-full pl-5 pr-12 py-4 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-legal-gold text-gray-900 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-legal-gold text-white rounded-md flex items-center justify-center hover:bg-legal-gold-hover transition-colors">
                <Search size={20} />
              </button>
            </div>

            {/* Feature Picture */}
            <div className="mt-12 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://picsum.photos/seed/homepage-feature/1200/600" 
                alt="E-Lawyers Corporate Services" 
                className="w-full h-auto object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
        </section>

        {/* Categories Navigation */}
        <section className="border-b border-gray-200 bg-white sticky top-20 z-40 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-4 hide-scrollbar gap-2 md:gap-4">
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-legal-navy text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {searchQuery || activeCategory !== "All" ? (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold text-legal-navy mb-8 flex items-center gap-3 border-b border-gray-200 pb-4">
                {searchQuery ? <Search className="text-legal-gold" size={24} /> : <BookOpen className="text-legal-gold" size={24} />}
                {searchQuery ? `Search Results for "${searchQuery}"` : `${activeCategory} Articles`}
              </h2>
              
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <article 
                      key={post.id || `search-${index}`} 
                      onClick={() => setCurrentView('post')}
                      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-legal-navy/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-display text-xl font-bold text-legal-navy mb-4 leading-snug group-hover:text-legal-gold transition-colors">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
                          <img 
                            src={post.authorAvatar} 
                            alt={post.author} 
                            className="w-10 h-10 rounded-full object-cover border border-gray-200"
                            referrerPolicy="no-referrer"
                          />
                          <div className="text-sm">
                            <p className="font-semibold text-legal-navy">{post.author}</p>
                            <p className="text-gray-500">{post.date}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                  <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Latest Post (Featured) */}
              <div className="mb-16">
                <h2 className="font-display text-3xl font-bold text-legal-navy mb-8 flex items-center gap-3 border-b border-gray-200 pb-4">
                  <BookOpen className="text-legal-gold" size={28} />
                  Featured Insight
                </h2>
                
                <div 
              onClick={() => setCurrentView('post')}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-[300px] lg:h-auto overflow-hidden">
                <img 
                  src={latestPost.image} 
                  alt={latestPost.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-legal-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                  {latestPost.category}
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center h-full bg-white">
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-legal-navy mb-4 leading-tight group-hover:text-legal-gold transition-colors">
                  {latestPost.title}
                </h3>
                <p className="text-gray-600 text-lg mb-8 line-clamp-4 leading-relaxed">
                  {latestPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <img 
                    src={latestPost.authorAvatar} 
                    alt={latestPost.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-semibold text-legal-navy">{latestPost.author}</p>
                    <p className="text-sm text-gray-500">{latestPost.date} · {latestPost.readTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editor's Picks */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-legal-navy mb-8 flex items-center gap-3 border-b border-gray-200 pb-4">
              <Briefcase className="text-legal-gold" size={24} />
              Expert Analysis
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {editorsPicks.map(post => (
                <article 
                  key={post.id} 
                  onClick={() => setCurrentView('post')}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-legal-navy/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-bold text-legal-navy mb-4 leading-snug group-hover:text-legal-gold transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
                      <img 
                        src={post.authorAvatar} 
                        alt={post.author} 
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-sm">
                        <p className="font-semibold text-legal-navy">{post.author}</p>
                        <p className="text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Recent Posts Grid */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-legal-navy mb-8 flex items-center gap-3 border-b border-gray-200 pb-4">
              <Scale className="text-legal-gold" size={24} />
              Recent Legal Updates
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map(post => (
                <article 
                  key={post.id} 
                  onClick={() => setCurrentView('post')}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-legal-navy/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-bold text-legal-navy mb-4 leading-snug group-hover:text-legal-gold transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
                      <img 
                        src={post.authorAvatar} 
                        alt={post.author} 
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-sm">
                        <p className="font-semibold text-legal-navy">{post.author}</p>
                        <p className="text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="bg-white border-2 border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white px-8 py-3 rounded-md font-bold transition-colors inline-flex items-center gap-2">
                Load More Articles <ArrowRight size={18} />
              </button>
            </div>
          </div>
          </>
          )}

          {/* Services & Tools Table */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-legal-navy mb-8 flex items-center gap-3 border-b border-gray-200 pb-4">
              <Briefcase className="text-legal-gold" size={24} />
              Essential Services & Calculators
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-legal-navy text-white">
                      <th className="p-4 font-semibold text-sm md:text-base whitespace-nowrap">Service / Tool</th>
                      <th className="p-4 font-semibold text-sm md:text-base whitespace-nowrap">Category</th>
                      <th className="p-4 font-semibold text-sm md:text-base hidden sm:table-cell">Description</th>
                      <th className="p-4 font-semibold text-sm md:text-base text-right whitespace-nowrap">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-legal-navy whitespace-nowrap">Tax Rebate Calculator</td>
                      <td className="p-4 text-gray-600 whitespace-nowrap">Financial Tool</td>
                      <td className="p-4 text-gray-600 hidden sm:table-cell text-sm">Calculate your eligible tax rebates easily.</td>
                      <td className="p-4 text-right">
                        <button className="text-legal-gold hover:text-legal-gold-hover font-medium text-sm whitespace-nowrap">Use Tool</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-legal-navy whitespace-nowrap">Company Registration</td>
                      <td className="p-4 text-gray-600 whitespace-nowrap">Legal Service</td>
                      <td className="p-4 text-gray-600 hidden sm:table-cell text-sm">Full support for forming a new business in BD.</td>
                      <td className="p-4 text-right">
                        <button className="text-legal-gold hover:text-legal-gold-hover font-medium text-sm whitespace-nowrap">Learn More</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-legal-navy whitespace-nowrap">RJSC Return Filing</td>
                      <td className="p-4 text-gray-600 whitespace-nowrap">Compliance</td>
                      <td className="p-4 text-gray-600 hidden sm:table-cell text-sm">Annual return submission for registered companies.</td>
                      <td className="p-4 text-right">
                        <button className="text-legal-gold hover:text-legal-gold-hover font-medium text-sm whitespace-nowrap">Learn More</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-legal-navy whitespace-nowrap">VAT & Tax Calculator</td>
                      <td className="p-4 text-gray-600 whitespace-nowrap">Financial Tool</td>
                      <td className="p-4 text-gray-600 hidden sm:table-cell text-sm">Compute your VAT and Tax liabilities accurately.</td>
                      <td className="p-4 text-right">
                        <button className="text-legal-gold hover:text-legal-gold-hover font-medium text-sm whitespace-nowrap">Use Tool</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-legal-navy mb-8 flex items-center gap-3 border-b border-gray-200 pb-4">
              <BookOpen className="text-legal-gold" size={24} />
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.filter(post => post.category === latestPost.category && post.id !== latestPost.id).slice(0, 3).map(post => (
                <article 
                  key={post.id} 
                  onClick={() => setCurrentView('post')}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-legal-navy/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-bold text-legal-navy mb-4 leading-snug group-hover:text-legal-gold transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <img 
                          src={post.authorAvatar} 
                          alt={post.author} 
                          className="w-8 h-8 rounded-full object-cover border border-gray-200"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-xs">
                          <p className="font-semibold text-legal-navy">{post.author}</p>
                          <p className="text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <span className="text-legal-gold font-medium text-sm flex items-center gap-1 group-hover:text-legal-gold-hover transition-colors">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-legal-navy text-white pt-16 pb-8 border-t-4 border-legal-gold">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-legal-gold">
                  <Scale size={24} />
                </div>
                <span className="font-display font-bold text-2xl tracking-tight text-white">
                  E-Lawyers
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                E-Lawyers is a professional legal and business consultancy firm providing trusted solutions for individuals and businesses. Our experienced team offers expert services in legal, tax, VAT, and corporate matters.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-legal-gold transition-colors cursor-pointer">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-legal-gold transition-colors cursor-pointer">
                  <span className="text-xs">IN</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-legal-gold transition-colors cursor-pointer">
                  <span className="text-xs">TW</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-legal-gold">Our Services</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Legal Services</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Accounting Services</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Company Registration</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> RJSC Return Filing</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Tax & VAT Calculator</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-legal-gold">Quick Links</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Our Team</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> E-Lawyers Academy</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Career</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-legal-gold">Contact Info</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-legal-gold shrink-0 mt-0.5" />
                  <span>144/1, G-5, BTI Centara Grand,<br/>144 Green Rd, Dhaka 1215</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-legal-gold shrink-0" />
                  <span>01616-428429 / 01313-583838</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-legal-gold shrink-0" />
                  <span>info@elawyersbd.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 E-Lawyers. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-legal-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-legal-gold transition-colors">Terms & Conditions</a>
              <span className="text-legal-gold">Reg. No: P-50906</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
