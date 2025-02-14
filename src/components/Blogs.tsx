import React from "react";
import styled from "styled-components";

const BlogsContainer = styled.section`
  padding: 40px;
  text-align: center;
  font : Plus Jakarta Sans
`;

const blogs = [
  {
    id: 1,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”",
    image: "/images/blog1.svg",
  },
  {
    id: 2,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”",
      image: "/images/blog2.svg",
  },
  {
    id: 3,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”",
      image: "/images/blog3.svg",
  },
];

const Blogs: React.FC = () => {
  return (
    <BlogsContainer>
      <section className="bg-gray-100 md:px-16 w-full">
      <div className="container mx-auto px-4 py-8 w-full">
      <h1 className="text-2xl font-bold text-[#0F0049] mb-8 text-left">Our Blogs</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative group cursor-pointer bg-white">
            <div className="relative w-[355px] h-[450px] overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            
            </div>
            <div className="absolute top-[370px] left-10 p-6 bg-[#FFFFFF]">
                <h2 className="text-[24px] font-medium text-[#0F0049] mb-2">
                  {blog.title}
                </h2>
                <p className="text-[14px] text-[#0F0049] pr-8">
                  {blog.description}
                </p>
                <div className="absolute bottom-6 right-6">
                  <svg 
                    className="w-6 h-6 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
          </div>
        ))}
        
      </div>

      <div className="flex justify-center mt-48">
        <button className="bg-[#6153CD] text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          View all posts
        </button>
      </div>
    </div>
      </section>
    </BlogsContainer>
  );
};

export default Blogs;


