import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Building Modern React Applications",
      excerpt: "Learn how to build scalable React applications with modern tools and best practices...",
      date: "September 1, 2025",
      readTime: "5 min read",
      category: "React",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Mastering Full Stack Development",
      excerpt: "A comprehensive guide to becoming a full-stack developer in 2025...",
      date: "August 28, 2025",
      readTime: "8 min read",
      category: "Full Stack",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "AI and Web Development: The Future",
      excerpt: "How artificial intelligence is transforming the way we build web applications...",
      date: "August 25, 2025",
      readTime: "6 min read",
      category: "AI",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Database Design Best Practices",
      excerpt: "Essential principles for designing efficient and scalable database schemas...",
      date: "August 22, 2025",
      readTime: "7 min read",
      category: "Database",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[font1]">
            My Blogs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and insights about web development, programming, 
            and the latest technologies in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-900 to-gray-900 flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-[#A9927D] rounded-full text-sm">
                    {blog.category}
                  </span>
                  <span className="text-gray-400 text-sm">{blog.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 hover:text-emerald-400 transition-colors">
                  {blog.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{blog.date}</span>
                  <button className="text-emerald-400 hover:text-emerald-300 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-600 rounded-lg hover:border-emerald-400 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
