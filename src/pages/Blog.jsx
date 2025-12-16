import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Signs Your Home Needs a Remodel',
      excerpt: 'Discover the telltale signs that it\'s time to update your home and increase its value.',
      image: 'https://www.figma.com/api/mcp/asset/fca367ad-8905-4cc6-b1ac-324577992389',
      category: 'Home Improvement',
      date: 'December 10, 2024',
      author: 'JMC Team',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Choosing the Right Siding for Your Home',
      excerpt: 'Compare vinyl, fiber cement, and wood siding options to find the perfect fit for your home and budget.',
      image: 'https://www.figma.com/api/mcp/asset/0d1ccc82-4f16-4e68-a890-ad26ed05b0c8',
      category: 'Exterior',
      date: 'December 8, 2024',
      author: 'JMC Team',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'How to Prepare Your Home for a Major Renovation',
      excerpt: 'Essential steps to take before starting a home renovation project to ensure a smooth process.',
      image: 'https://www.figma.com/api/mcp/asset/2b30f9f5-252a-49a7-97ab-2923b80f3e9c',
      category: 'Planning',
      date: 'December 5, 2024',
      author: 'JMC Team',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Energy-Efficient Home Upgrades That Pay for Themselves',
      excerpt: 'Invest in these home improvements to reduce energy costs and increase comfort.',
      image: 'https://www.figma.com/api/mcp/asset/c8a023e5-e4ca-4eee-b508-aec203961722',
      category: 'Energy Efficiency',
      date: 'December 1, 2024',
      author: 'JMC Team',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Kitchen Remodeling Trends for 2025',
      excerpt: 'The latest kitchen design trends that combine style, functionality, and value.',
      image: 'https://www.figma.com/api/mcp/asset/ddaab13a-a94a-4479-b12b-96ef2b544d68',
      category: 'Interior Design',
      date: 'November 28, 2024',
      author: 'JMC Team',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Understanding Construction Permits in Texas',
      excerpt: 'A comprehensive guide to permits required for construction and remodeling projects.',
      image: 'https://www.figma.com/api/mcp/asset/a09497e3-3c3e-4bc4-9b65-9d70ead48f8c',
      category: 'Legal & Permits',
      date: 'November 25, 2024',
      author: 'JMC Team',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Home Improvement', 'Exterior', 'Interior Design', 'Planning', 'Energy Efficiency', 'Legal & Permits'];

  const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0L10 20M10 20L0 10M10 20L20 10" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-black text-white">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#ECB373" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>

        <div className="container-custom relative z-10 py-20">
          <h1 className="font-radhiumz text-5xl md:text-6xl lg:text-7xl uppercase mb-6">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="font-poppins text-xl md:text-2xl max-w-3xl">
            Expert insights, tips, and inspiration for your next construction or remodeling project
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="bg-white rounded-[30px] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-auto">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-black px-4 py-2 rounded-full font-poppins font-bold text-sm">
                    FEATURED
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary font-poppins font-semibold text-sm">{blogPosts[0].category}</span>
                  <span className="text-gray-500 font-poppins text-sm">{blogPosts[0].date}</span>
                  <span className="text-gray-500 font-poppins text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="font-radhiumz text-3xl md:text-4xl uppercase mb-4">{blogPosts[0].title}</h2>
                <p className="font-poppins text-lg text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
                <div>
                  <Button variant="primary" icon={<ArrowIcon />}>
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-gray-300 font-poppins text-sm hover:border-primary hover:text-primary transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg card-hover"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-black px-3 py-1 rounded-full font-poppins font-bold text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-gray-500 font-poppins text-xs">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-radhiumz text-xl uppercase mb-3 line-clamp-2">{post.title}</h3>
                  <p className="font-poppins text-sm text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary font-poppins font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0L8 16M8 16L0 8M8 16L16 8" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-primary text-black font-poppins font-bold">1</button>
            <button className="w-12 h-12 rounded-full border border-gray-300 font-poppins hover:border-primary transition-colors">2</button>
            <button className="w-12 h-12 rounded-full border border-gray-300 font-poppins hover:border-primary transition-colors">3</button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-radhiumz text-4xl md:text-5xl uppercase mb-6">
              Stay Updated with <span className="text-primary">Construction Tips</span>
            </h2>
            <p className="font-poppins text-lg mb-8">
              Subscribe to our newsletter and get expert advice, project updates, and special offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 max-w-md px-6 py-4 rounded-full text-black font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary">
                Subscribe
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0L10 20M10 20L0 10M10 20L20 10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-radhiumz text-4xl md:text-5xl uppercase text-black mb-6">
            Have a Project in Mind?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto">
            Let's turn your ideas into reality with expert craftsmanship and reliable service.
          </p>
          <Button variant="dark" icon={<ArrowIcon />}>
            Get Free Estimate
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;

